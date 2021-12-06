
class IndividualLessonBookingService implements BookingService<IndividualLesson> {
    private lessonService: LessonService;
    private balanceService: BalanceService;
    private notificationService: NotificationService;

    constructor() {
        this.lessonService = new LessonService();
        this.balanceService = new BalanceService();
        this.notificationService = new NotificationService();
    }

    async bookLesson(lesson: IndividualLesson, student: Student): Promise<IndividualLesson> {
        if (await this.balanceService.hasLessonAtBalance(lesson)) {
            await this.balanceService.withdrawLessonFromBalance(lesson);
            
            const createdLesson = await this.lessonService.createLesson(lesson);
            
            this.notificationService.sendNotification(
                new IndividualLessoBookedNotification(createdLesson)
            );
            return createdLesson;
        } else {
            throw new Error('Insufficient balance');
        }
    }

    // Others code here...
}