
class IndividualLesson extends Lesson {
    constructor(props: LessonProps) {
        super(props);
    }
}

class TrialLesson extends Lesson {
    englishLevel: string;

    constructor(props: TrialLessonProps) {
        super(props);
        this.englishLevel = props.englishLevel;
    }
}
