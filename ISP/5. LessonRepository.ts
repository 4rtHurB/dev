
interface LessonRepository {
    getAllLessons<T extends Lesson>(): Promise<T[]>;
    getLessonById<T extends Lesson>(id: number): Promise<T>;
    createLesson<T extends Lesson>(lesson: T): Promise<T>;
    updateLesson<T extends Lesson>(lesson: T): Promise<T>;
    deleteLeson<T extends Lesson>(lesson: T): Promise<T>;

    getLessonByTags<T extends Lesson>(tags: string[]): Promise<T[]>;
    getStudentLessons<T extends Lesson>(student: Student): Promise<T[]>;
    getPastLessons<T extends Lesson>(): Promise<T[]>;
}