const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/[locale]/about/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Normalize line endings to LF
let originalWithCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Replace selectMilestone definition
const oldSelectMilestone = `  const selectMilestone = (index: number, stopAutoplay = false) => {
    setActiveIndex(index);
    setAutoplayProgress(0);
    if (stopAutoplay) {
      setIsPlaying(false);
    }
  };`;

const newSelectMilestone = `  const selectMilestone = (index: number, scrollIntoView = true) => {
    setActiveIndex(index);
    setAutoplayProgress(0);
    setIsPlaying(false);
    if (scrollIntoView) {
      const el = document.getElementById("timeline-row-" + index);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };`;

if (!content.includes(oldSelectMilestone)) {
  console.error("Could not find oldSelectMilestone!");
} else {
  content = content.replace(oldSelectMilestone, newSelectMilestone);
}

// 2. Replace Autoplay loop with Scroll Spy
const oldAutoplay = `  // Autoplay loop
  useEffect(() => {
    if (!mounted || !isPlaying || isHovered) return;
    
    // Reset progress to 0 when starting/resuming or changing active index
    setAutoplayProgress(0);
    
    const interval = 50; // ms
    const duration = 3000; // 3 seconds autoplay gap
    const totalSteps = duration / interval; // 60 steps
    const step = 100 / totalSteps; // ~1.67
    
    const timer = setInterval(() => {
      setAutoplayProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((idx) => (idx + 1) % journeyTimeline.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [mounted, isPlaying, isHovered, activeIndex, journeyTimeline.length]);`;

const newScrollSpy = `  // Scroll Spy to automatically activate milestones as user scrolls
  useEffect(() => {
    if (!mounted) return;

    const handleScrollSpy = () => {
      const threshold = window.innerHeight * 0.45; // 45% from top of viewport
      let activeIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < journeyTimeline.length; i++) {
        const el = document.getElementById("timeline-row-" + i);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - threshold);
          if (rect.top < threshold + 150 && distance < minDistance) {
            minDistance = distance;
            activeIdx = i;
          }
        }
      }

      // Only update if index has changed and timeline section is visible
      const timelineSection = document.getElementById("timeline");
      if (timelineSection) {
        const secRect = timelineSection.getBoundingClientRect();
        if (secRect.top < window.innerHeight && secRect.bottom > 0) {
          setActiveIndex(activeIdx);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // Run once on load

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [mounted, journeyTimeline.length]);`;

if (!content.includes(oldAutoplay)) {
  console.error("Could not find oldAutoplay!");
} else {
  content = content.replace(oldAutoplay, newScrollSpy);
}

// 3. Add id to motion.div inside loop
const oldMotionDiv = `                  <motion.div
                    layout
                    key={item.year}`;

const newMotionDiv = `                  <motion.div
                    layout
                    id={"timeline-row-" + i}
                    key={item.year}`;

if (!content.includes(oldMotionDiv)) {
  console.error("Could not find oldMotionDiv!");
} else {
  content = content.replace(oldMotionDiv, newMotionDiv);
}

// Restore line endings if originally CRLF
if (originalWithCRLF) {
  content = content.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log("Timeline scroll spy patched successfully!");
