// Utility function for smooth scrolling to sections
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  // Remove # if present and add it back to ensure proper format
  const hash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  const element = document.querySelector(hash);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
    
    // Update URL without triggering scroll
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', hash);
    }
    
    return true;
  }
  
  return false;
};

// Handle hash navigation on page load
export const handleHashNavigation = () => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      scrollToSection(hash, 80);
    }, 100);
  }
};

