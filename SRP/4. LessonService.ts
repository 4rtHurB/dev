
class LessonService {
    private lessonRepository: LessonRepository;

    constructor() {
        this.lessonRepository = new LessonRepository();
    }

    async createLesson(lesson: Lesson, student: Student) {
        lesson.student = student;
        return this.lessonRepository.createLesson(lesson);
    } 
    
    async deleteLesson(lesson: Lesson, student: Student) {
        lesson.student = student;
        return this.lessonRepository.deleteLeson(lesson);
    }
}