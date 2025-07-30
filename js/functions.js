const contentTitle = document.getElementById('content-title');
const dashboardLink = document.getElementById('dashboard-link');
const analyticsLink = document.getElementById('analytics-link');
const scannerlink = document.getElementById('scanner-link');
const postlink = document.getElementById('post-link');


const Bread = document.getElementById('BreadcrumName');

function showContent(contentId, title) {
    contentTitle.textContent = title;

    document.getElementById('dashboard-content').style.display = 'none';
 
    document.getElementById('analytics-content').style.display = 'none';
    document.getElementById('post-content').style.display = 'none';
  

    document.getElementById(contentId).style.display = 'block';
}



dashboardLink.addEventListener('click', () => {
    showContent('dashboard-content', 'Home');
    Bread.textContent = 'Home'; 
});

analyticsLink.addEventListener('click', () => {
    showContent('analytics-content', 'Students');
    Bread.textContent = 'Students'; 
});
postlink.addEventListener('click', () => {
    showContent('post-content', 'Archives');
    Bread.textContent = 'Archives'; 
});

