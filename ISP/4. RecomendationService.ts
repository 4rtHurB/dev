
class RecomendationService {
    private lessonPepository: LessonRepository;

    constructor() {
        this.lessonPepository = new LessonRepository();
    }

    async getGroupLessonRecomendation(student: Student) {
        const lastStudentLessons = await this.lessonPepository.getStudentLessons<GroupLesson>(student);
        const pastLessons = await this.lessonPepository.getPastLessons<GroupLesson>();

        const interestedTags = [];
        for (const lesson of lastStudentLessons) {
            interestedTags.push(...lesson.tags);
        }

        const interestedLessons = await this.lessonPepository.getLessonByTags<GroupLesson>(
            interestedTags
        );

        const popularLessons = pastLessons
            .sort((previousLesson, currentLesson) =>
                previousLesson.students.length > currentLesson.students.length ? -1 : 1
            )
            .slice(0, 5);

        return interestedLessons.slice(0, 5).concat(popularLessons);
    }
}
