
class LessonReminderService {
    private lessonService: LessonService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonService = new LessonService();
        this.notificationService = new NotificationService();
    }

    public async remindStudentsAboutCommingLessons() {
        const lessonsToRemind: Lesson[] = await this.lessonService.getAllUpcomingLessons();
        for (const lesson of lessonsToRemind) {
            this.notificationService.sendNotification(
                new CommingLessonNotification(lesson, lesson.remindNotificationRecipients)
            );
        }
    }
}
