const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/[locale]/about/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to LF for easier string matching
let originalWithCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Fix arrow key navigation selectMilestone(..., false) -> selectMilestone(..., true) to stop autoplay
content = content.replace(
  `selectMilestone(activeIndex > 0 ? activeIndex - 1 : journeyTimeline.length - 1, false);`,
  `selectMilestone(activeIndex > 0 ? activeIndex - 1 : journeyTimeline.length - 1, true);`
);
content = content.replace(
  `selectMilestone(activeIndex < journeyTimeline.length - 1 ? activeIndex + 1 : 0, false);`,
  `selectMilestone(activeIndex < journeyTimeline.length - 1 ? activeIndex + 1 : 0, true);`
);

// 2. Locate the timeline block and replace it
const targetTimelineStart = `          {/* Vertical Timeline */}
          <div className="relative">`;

const targetTimelineEnd = `              })}
            </div>
          </div>`;

const targetIndex = content.indexOf(targetTimelineStart);
if (targetIndex === -1) {
  console.error("Could not locate timeline start block!");
  process.exit(1);
}

const endIndex = content.indexOf(targetTimelineEnd, targetIndex);
if (endIndex === -1) {
  console.error("Could not locate timeline end block!");
  process.exit(1);
}

const oldTimelineBlock = content.substring(targetIndex, endIndex + targetTimelineEnd.length);

const newTimelineBlock = `          {/* Vertical Timeline */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* Center vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200 to-transparent hidden md:block" />

            <motion.div layout className="flex flex-col gap-0">
              {journeyTimeline.map((item, i) => {
                const isLeft = i % 2 === 0;   // 2023 left, 2025 left
                const isActive = activeIndex === i;

                return (
                  <motion.div
                    layout
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    {/* Desktop layout — alternating sides */}
                    <div className="hidden md:grid grid-cols-2 gap-0 items-start min-h-[160px]">

                      {/* LEFT SIDE: Symmetrically aligned to right */}
                      <div className="flex justify-end pr-8 md:pr-12 py-10">
                        {isLeft ? (
                          /* Year label on left side */
                          <button
                            onClick={() => selectMilestone(i, true)}
                            className="group flex flex-col items-end gap-2 focus:outline-none"
                          >
                            <span className={\`font-black font-heading tracking-tighter transition-all duration-300 leading-none select-none \${
                              isActive
                                ? "text-[72px] md:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400"
                                : "text-[56px] md:text-[72px] text-[#0A1A4E]/20 group-hover:text-[#0A1A4E]/40"
                            }\`}>
                              {item.year}
                            </span>
                            {!isActive && (
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2EA8]/40 group-hover:text-[#0B2EA8]/70 transition-colors">
                                {isHindi ? "क्लिक करें" : "Click to view"}
                              </span>
                            )}
                          </button>
                        ) : (
                          /* Timeline Card revealed on left when this right-year is active */
                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.96, x: -15 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.96, x: -15 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-[420px] rounded-[2rem] bg-white border border-slate-100 p-6 shadow-[0_20px_50px_rgba(11,46,168,0.06)] flex flex-col gap-4 text-left"
                              >
                                {/* Photo */}
                                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                                  <img
                                    src={item.image}
                                    alt={\`Curious Media \${item.year}\`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                                    }}
                                  />
                                </div>
                                {/* Details */}
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                                    {item.subtitle}
                                  </span>
                                  <h4 className="text-xl font-black text-[#0A1A4E] uppercase tracking-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                                    {translate(item.desc)}
                                  </p>
                                  {/* Milestones list */}
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {item.milestones.map((ms, idx) => (
                                      <span 
                                        key={idx} 
                                        className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-50 text-[#0B2EA8] border border-blue-100/30"
                                      >
                                        {ms}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>

                      {/* Center dot: Vertically anchored relative to year label center */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-[84px] -translate-y-1/2 z-10">
                        <motion.div
                          animate={{
                            scale: isActive ? 1.4 : 1,
                            backgroundColor: isActive ? "#0B2EA8" : "#CBD5E1",
                          }}
                          className="w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-400"
                        />
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-[#0B2EA8]/30 animate-ping" />
                        )}
                      </div>

                      {/* RIGHT SIDE: Symmetrically aligned to left */}
                      <div className="flex justify-start pl-8 md:pl-12 py-10">
                        {!isLeft ? (
                          /* Year label on right side */
                          <button
                            onClick={() => selectMilestone(i, true)}
                            className="group flex flex-col items-start gap-2 focus:outline-none"
                          >
                            <span className={\`font-black font-heading tracking-tighter transition-all duration-300 leading-none select-none \${
                              isActive
                                ? "text-[72px] md:text-[88px] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400"
                                : "text-[56px] md:text-[72px] text-[#0A1A4E]/20 group-hover:text-[#0A1A4E]/40"
                            }\`}>
                              {item.year}
                            </span>
                            {!isActive && (
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2EA8]/40 group-hover:text-[#0B2EA8]/70 transition-colors">
                                {isHindi ? "क्लिक करें" : "Click to view"}
                              </span>
                            )}
                          </button>
                        ) : (
                          /* Timeline Card revealed on right when this left-year is active */
                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.96, x: 15 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.96, x: 15 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-[420px] rounded-[2rem] bg-white border border-slate-100 p-6 shadow-[0_20px_50px_rgba(11,46,168,0.06)] flex flex-col gap-4 text-left"
                              >
                                {/* Photo */}
                                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 relative">
                                  <img
                                    src={item.image}
                                    alt={\`Curious Media \${item.year}\`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                                    }}
                                  />
                                </div>
                                {/* Details */}
                                <div className="flex flex-col gap-1.5">
                                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                                    {item.subtitle}
                                  </span>
                                  <h4 className="text-xl font-black text-[#0A1A4E] uppercase tracking-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                                    {translate(item.desc)}
                                  </p>
                                  {/* Milestones list */}
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {item.milestones.map((ms, idx) => (
                                      <span 
                                        key={idx} 
                                        className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-50 text-[#0B2EA8] border border-blue-100/30"
                                      >
                                        {ms}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    </div>

                    {/* Mobile layout - stacked single column */}
                    <div className="md:hidden flex flex-col items-center py-6 gap-4">
                      <button
                        onClick={() => selectMilestone(i, true)}
                        className="focus:outline-none"
                      >
                        <span className={\`font-black font-heading tracking-tighter transition-all duration-300 leading-none block text-center \${
                          isActive
                            ? "text-[64px] text-transparent bg-clip-text bg-gradient-to-r from-[#0B2EA8] to-sky-400"
                            : "text-[48px] text-[#0A1A4E]/25"
                        }\`}>
                          {item.year}
                        </span>
                      </button>

                      {/* Mobile: vertical connector dot */}
                      <div className="relative">
                        <motion.div
                          animate={{ scale: isActive ? 1.3 : 1, backgroundColor: isActive ? "#0B2EA8" : "#CBD5E1" }}
                          className="w-3 h-3 rounded-full border-2 border-white shadow"
                        />
                      </div>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="w-full overflow-hidden"
                          >
                            <div className="w-full rounded-[2rem] bg-white border border-slate-100 p-5 shadow-[0_15px_40px_rgba(11,46,168,0.06)] flex flex-col gap-4 text-left">
                              {/* Photo */}
                              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                                <img
                                  src={item.image}
                                  alt={\`Curious Media \${item.year}\`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=600&q=80";
                                  }}
                                />
                              </div>
                              {/* Details */}
                              <div className="flex flex-col gap-1.5">
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#0B2EA8]">
                                  {item.subtitle}
                                </span>
                                <h4 className="text-lg font-black text-[#0A1A4E] uppercase tracking-tight">
                                  {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                                  {translate(item.desc)}
                                </p>
                                {/* Milestones list */}
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                  {item.milestones.map((ms, idx) => (
                                    <span 
                                      key={idx} 
                                      className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-[#0B2EA8] border border-blue-100/30"
                                    >
                                      {ms}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mobile vertical line connector */}
                      {i < journeyTimeline.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-blue-200 to-transparent" />
                      )}
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </div>`;

let finalContent = content.replace(oldTimelineBlock, newTimelineBlock);

// Restore line endings if originally CRLF
if (originalWithCRLF) {
  finalContent = finalContent.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log("Timeline patched successfully!");
