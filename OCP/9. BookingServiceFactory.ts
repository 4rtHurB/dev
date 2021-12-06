class BookingServiceFactory {
    private static serviceInstances: Map<
        LessonType,
        BookingService<TrialLesson> | BookingService<IndividualLesson>
    >;

    public static getBookingService(type: LessonType): BookingService<TrialLesson> | BookingService<IndividualLesson> | undefined {
        if (type === LessonType.INDIVIDUAL) {
            return this.getIndividualLessonBookingService();
        } if (type === LessonType.TRIAL) {
            return this.getTrialLessonBookingService();
        }
    }

    // Others code here...
}