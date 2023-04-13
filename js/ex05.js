<script>
function filter(keyword) {
    document.querySelectorAll('li.list-group-item:not(.list-group-item-primary)').forEach(item => {
        if (item.innerText.indexOf(keyword) >= 0) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
</script>