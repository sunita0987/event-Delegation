import React from 'react';
function List() {
  const handleClick = (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Clicked list item:', event.target.textContent);
    }
  };
  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      <li>Item 6</li>
    </ul>
  );
}
export default List;