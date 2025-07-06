"use client";

// Function to smoothly scroll to an element with a given ID
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Function to smoothly scroll to the top of the page
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
