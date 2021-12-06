
class LessonService {
    constructor(
        private lessonRepository: LessonRepository,
        private balanceRepository: BalanceRepository,
        private emailProvider: EmailProvider
    ) {}

    async bookLesson(student: Student, lesson: Lesson) {
        if (await this.hasLessonAtBalance(lesson)) {
            await this.withdrawLessonFromBalance(lesson);

            const createdLesson = await this.lessonRepository.createLesson(lesson);

            this.sendNotificationAboutLessonBooked(createdLesson);
            return createdLesson;
        } else {
            throw new Error('Insufficient balance');
        }
    }

    async cancelLesson(student: Student, lesson: Lesson) {
        await this.addLessonToBalance(lesson);

        const canceledLesson = await this.lessonRepository.deleteLesson(lesson);
        
        this.sendNotificationAboutLessonCanceled(canceledLesson);
        return canceledLesson;
    }

    // Others code here...
}
