
class LessonReminderService {
    private lessonService: LessonService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonService = new LessonService();
        this.notificationService = new NotificationService();
    }

    async remindStudentsAboutCommingLessons() {
        const lessonsToRemind = await this.lessonService.getAllUpcomingLessons();
        for (const lesson of lessonsToRemind) {
            const recipients: string[] = [];
            
            if (lesson instanceof GroupLesson) {
                recipients.push(...lesson.students.map(student => student.email));
            } else {
                recipients.push(lesson.student.email);
                recipients.push(lesson.tutor.email);
            }

            this.notificationService.sendNotification(
                new CommingLessonNotification(lesson, recipients)
            );
        }
    }
}
