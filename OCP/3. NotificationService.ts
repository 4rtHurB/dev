
class NotificationService {
    // Others code here...

    sendNotificationAboutLessonBooked(lesson: Lesson | TrialLesson) {
        const lessonTimeStart: string =  lesson.timeStart.toISOString();

        const templateAttributes = {
            from: 'allright.charlie@gmail.com',
            timeStart: lessonTimeStart,
        };

        if (lesson instanceof Lesson) {
            this.sendEmail(lesson.student.email, EMAIL_TEMPLATES.STUDENT_LESSON_BOOKED, {
                ...templateAttributes,
                title: `New lesson booked at ${lessonTimeStart}`,
            });
        }

        if (lesson instanceof TrialLesson) {
            this.sendEmail(lesson.student.email, EMAIL_TEMPLATES.STUDENT_TRIAL_LESSON_BOOKED, {
                ...templateAttributes,
                title: `We are booked free lesson for you at ${lessonTimeStart}`,
            });

            this.sendEmail(lesson.tutor.email, EMAIL_TEMPLATES.TUTOR_TRIAL_LESSON_BOOKED, {
                ...templateAttributes, 
                from: 'allright.teachers@gmail.com',
                title: `You have are new trial lesson at ${lessonTimeStart} with ${lesson.student.name}`,
                englishLevel: lesson.englishLevel,
            });
        }
    }

    // Others code here...
}
