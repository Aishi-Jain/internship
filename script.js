// Dynamically adjust the number of columns based on the viewport width
function adjustGrid() {
  const gallery = document.getElementById('gallery');
  const columns = gallery.querySelectorAll('.column');
  
  let columnCount;
  if (window.innerWidth > 800) {
      columnCount = 4;
  } else if (window.innerWidth > 600) {
      columnCount = 2;
  } else {
      columnCount = 1;
  }

  columns.forEach(column => {
      column.style.flex = `0 0 ${100 / columnCount}%`;
      column.style.maxWidth = `${100 / columnCount}%`;
  });
}

// Add event listeners
window.addEventListener('resize', adjustGrid);
window.addEventListener('load', adjustGrid);
