document.getElementById('category-filter').addEventListener('change', function () {
    const selectedCategory = this.value;
    const gridItems = document.querySelectorAll('.grid-column');

        gridItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            // Show all if 'all' is selected or match the category
            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

function navigateTo(category) {
    window.location.href = `${category}.html`;
}