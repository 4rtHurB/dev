
class LessonService {
    private lessonRepository: LessonRepository;
    private balanceService: BalanceService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonRepository = new LessonRepository();
        this.balanceService = new BalanceService();
        this.notificationService = new NotificationService();
    }

    async bookLesson(lesson: Lesson, student: Student) {
        if (await this.balanceService.hasLessonAtBalance(lesson)) {
            await this.balanceService.withdrawLessonFromBalance(lesson);
            const createdLesson = await this.lessonRepository.createLesson(lesson);
            this.notificationService.sendNotificationAboutLessonBooked(createdLesson);
            return createdLesson;
        } else {
            throw new Error('Insufficient balance');
        }
    }

    async cancelLesson(lesson: Lesson, student: Student) {
        await this.balanceService.addLessonToBalance(lesson);

        const canceledLesson = await this.lessonRepository.deleteLeson(lesson);

        this.notificationService.sendNotificationAboutLessonCanceled(canceledLesson);
        return canceledLesson;
    }
}