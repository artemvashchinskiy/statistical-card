export default function initLeftColumn(root){
    const items = root.querySelectorAll('.menu li');


    items.forEach(item => {
        item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        });
    });
}