export declare abstract class BaseEntity {
    id: number;
    isActive: boolean;
    isArchived: boolean;
    createDateTime: Date;
    createdBy: string;
    lastChangedDateTime: Date;
    archivedDateTime: Date;
    lastChangedBy: string;
}
