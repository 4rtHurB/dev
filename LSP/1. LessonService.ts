class LessonService {
    // Others code here...

    async getAllUpcomingLessons(): Promise<Lesson[]> {
        const lessons = await this.lessonRepository.getAllLessons();
        const now = moment.utc();
        return lessons.filter((lesson) => now.diff(lesson.timeStart, 'hours') <= 4);
    }
}
