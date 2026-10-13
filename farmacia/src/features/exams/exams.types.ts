

export type ExamResponse = {
    id: number,
    name: string;
    exam_date: Date;
    results: string | null;
    notes: string | null;
    result_image_url: string | null
}