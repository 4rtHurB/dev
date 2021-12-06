
class IndividualLesson extends Lesson implements HasRemindNotificationRecipients {
    // Others code here...

    public get remindNotificationRecipients() {
        return [this.student.email, this.tutor.email];
    }
}

class TrialLesson extends Lesson implements HasRemindNotificationRecipients {
    // Others code here...

    public get remindNotificationRecipients() {
        return [this.student.email, this.tutor.email];
    }
}

class GroupLesson extends Lesson {
    // Others code here...

    public get remindNotificationRecipients() {
        return [
            ...this.students.map((student) => student.email), 
            this.tutor.email
        ];
    }
}