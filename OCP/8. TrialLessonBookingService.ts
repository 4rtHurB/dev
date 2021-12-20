
class TrialLessonBookingService implements BookingService<TrialLesson> {
    private lessonService: LessonService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonService = new LessonService();
        this.notificationService = new NotificationService();
    }

    async bookLesson(lesson: TrialLesson, student: Student): Promise<TrialLesson> {
        const createdLesson = await this.lessonService.createLesson(lesson);
        
        this.notificationService.sendNotification(
            new TrialLessonBookedNotification(createdLesson)
        );
        return createdLesson;
    }

    // Others code here...
}