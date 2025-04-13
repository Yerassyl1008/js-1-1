let btn = document.querySelector('#btn')

let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
  sidebar.classList.toggle('active')
}



// const totalPages = 10; 
//     let currentPage = 1;   

//     const prevButton = document.getElementById('prev');
//     const nextButton = document.getElementById('next');
//     const paginationButtons = document.querySelectorAll('.pagination button:not(#prev):not(#next)');

//     function updatePagination() {
//       // Обновление состояния кнопок
//       prevButton.disabled = currentPage === 1;
//       nextButton.disabled = currentPage === totalPages;

//       // Обновление активной кнопки
//       paginationButtons.forEach((button, index) => {
//         if (index + 1 === currentPage) {
//           button.classList.add('active');
//         } else {
//           button.classList.remove('active');
//         }
//       });
//     }

//     paginationButtons.forEach((button, index) => {
//       button.addEventListener('click', () => {
//         currentPage = index + 1;
//         updatePagination();
//       });
//     });

//     prevButton.addEventListener('click', () => {
//       if (currentPage > 1) {
//         currentPage--;
//         updatePagination();
//       }
//     });

//     nextButton.addEventListener('click', () => {
//       if (currentPage < totalPages) {
//         currentPage++;
//         updatePagination();
//       }
//     });

//     updatePagination();