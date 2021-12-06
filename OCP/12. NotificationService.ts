
class NotificationService {
    // Others code here...

    sendNotification(notification: Notification) {
        for (const emailNotification of notification.emailNotifications) {
            for (const recipient of emailNotification.recipients) {
                this.sendEmail(
                    recipient, 
                    emailNotification.template, 
                    emailNotification.attributes
                );
            }
        }
    }

    // Others code here...
}