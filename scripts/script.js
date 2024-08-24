document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq_item');

    faqItems.forEach(item => {
        const title = item.querySelector('.faq_item_title');
        const content = item.querySelector('.faq_item_content');
        const openIcon = item.querySelector('.faq_icon.open');
        const closeIcon = item.querySelector('.faq_icon.close');

        title.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';

            content.style.display = isOpen ? 'none' : 'block';
            openIcon.style.display = isOpen ? 'block' : 'none';
            closeIcon.style.display = isOpen ? 'none' : 'block';
        });
    });
});
