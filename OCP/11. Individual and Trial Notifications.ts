class IndividualLessoBookedNotification implements Notification {
    notifications: EmailNotification[] = [];
    lesson: Lesson;

    constructor(lesson: Lesson) {
        this.lesson = lesson;

        this.notifications.push({
            template: EMAIL_TEMPLATES.STUDENT_LESSON_BOOKED,
            attributes: {
                from: 'allright.charlie@gmail.com',
                timeStart: lesson.timeStartFormatted,
                title: `New lesson booked at ${lesson.timeStartFormatted}`,
            },
            recipients: [lesson.student.email],
        });
    }
}

class TrialLessonBookedNotification implements Notification {
    notifications: EmailNotification[] = [];
    lesson: Lesson;

    constructor(lesson: Lesson) {
        this.lesson = lesson;

        this.notifications.push({
            template: EMAIL_TEMPLATES.STUDENT_LESSON_BOOKED,
            attributes: {
                from: 'allright.charlie@gmail.com',
                timeStart: lesson.timeStartFormatted,
                title: `New lesson booked at ${lesson.timeStartFormatted}`,
            },
            recipients: [lesson.student.email],
        });
    }
}