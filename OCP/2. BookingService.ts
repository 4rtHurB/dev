
class BookingService {
    // Others code here...

    async bookLesson(lesson: Lesson | TrialLesson, student: Student) {
        // if (lesson instanceof GroupLesson) {
        //     // ...
        // }
        
        if (lesson instanceof TrialLesson) {
            const createdLesson = await this.lessonService.createLesson(lesson, student);

            this.notificationService.sendNotificationAboutLessonBooked(createdLesson);
            return createdLesson;
        } else if (lesson instanceof Lesson) {
            if (await this.balanceService.hasLessonAtBalance(lesson)) {
                await this.balanceService.withdrawLessonFromBalance(lesson);

                const createdLesson = await this.lessonService.createLesson(lesson, student);
                
                this.notificationService.sendNotificationAboutLessonBooked(createdLesson);
                return createdLesson;
            } else {
                throw new Error('Insufficient balance');
            }
        }
    }
    
    // Others code here...
}