import React from 'react';
// const Event = () => {
//   const names = ['Sunita', 'Amit', 'Ravi', 'Priya'];
//   const handleClick = (event) => {
//     const clickedElement = event.target;
//     if (clickedElement.tagName === 'LI') {
//       const name = clickedElement.getAttribute('data-name');
//       console.log('You clicked on:', name);
//     }
//   };
//   return (
//     <div>
//       <h2>List of Names</h2>
//       <ul onClick={handleClick}>
//         {names.map((name, index) => (
//           <li key={index} data-name={name}>
//             {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Event;
//2.
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
    </ul>
  );
}
export default List;