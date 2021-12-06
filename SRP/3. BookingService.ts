
class BookingService {
    private lessonService: LessonService;
    private balanceService: BalanceService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonService = new LessonService();
        this.balanceService = new BalanceService();
        this.notificationService = new NotificationService();
    }

    async bookLesson(lesson: Lesson, student: Student) {
        if (await this.balanceService.hasLessonAtBalance(lesson)) {
            await this.balanceService.withdrawLessonFromBalance(lesson);

            const createdLesson = await this.lessonService.createLesson(lesson, student);

            this.notificationService.sendNotificationAboutLessonBooked(createdLesson);
            return lesson;
        } else {
            throw new Error('Insufficient balance');
        }
    }

    async cancelLesson(lesson: Lesson, student: Student) {
        await this.balanceService.addLessonToBalance(lesson);

        const canceledLesson = await this.lessonService.deleteLesson(lesson, student);

        this.notificationService.sendNotificationAboutLessonCanceled(canceledLesson);
        return canceledLesson;
    }
}