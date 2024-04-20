function togglePage(page) {
    var dishes = document.querySelectorAll('.dish');

    dishes.forEach(function(dish) {
        dish.classList.add('hidden');
    });

    var currentPage = document.querySelector('.' + page);
    currentPage.classList.remove('hidden');
}
