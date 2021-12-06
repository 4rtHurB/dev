class RecomendationService {
    private lessonPepository: GroupLessonRecomendationRepository;

    constructor() {
        this.lessonPepository = new GroupLessonRecomendationRepository();
    }

    // Others code here...
}

class LessonService {
    private lessonRepository: LessonRepository;

    constructor() {
        this.lessonPepository = new LessonRepository();
    }

    // Others code here...
}