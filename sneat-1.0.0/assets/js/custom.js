
document.addEventListener('DOMContentLoaded', function () {
  const notificationIcon = document.querySelector('.dropdown-notifications');
  const notificationDropdown = document.querySelector('.dropdown-menu');
  const notificationItems = document.querySelectorAll('.dropdown-notifications-item');
  const markAllAsRead = document.querySelector('.dropdown-notifications-all');
  const notificationBadge = document.querySelector('.badge-notifications');

  let unreadNotifications = 5;

  // Function to update the notification badge
  function updateNotificationBadge() {
    if (unreadNotifications > 0) {
      notificationBadge.textContent = unreadNotifications;
      notificationBadge.style.display = 'block';
    } else {
      notificationBadge.style.display = 'none';
    }
  }

  // Toggle dropdown on icon click
  notificationIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    notificationDropdown.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function (event) {
    if (!notificationIcon.contains(event.target)) {
      notificationDropdown.classList.remove('show');
    }
  });

  // Mark a single notification as read
  notificationItems.forEach(item => {
    const readButton = item.querySelector('.dropdown-notifications-read');
    readButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (!item.classList.contains('marked-as-read')) {
        item.classList.add('marked-as-read');
        unreadNotifications--;
        updateNotificationBadge();
      }
    });
  });

  // Mark all as read
  markAllAsRead.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    notificationItems.forEach(item => {
      if (!item.classList.contains('marked-as-read')) {
        item.classList.add('marked-as-read');
      }
    });
    unreadNotifications = 0;
    updateNotificationBadge();
  });

  updateNotificationBadge();
});
