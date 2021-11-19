"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myInit1637269943164 = void 0;
class myInit1637269943164 {
    constructor() {
        this.name = 'myInit1637269943164';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "archivedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL, "text" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "todo"`);
    }
}
exports.myInit1637269943164 = myInit1637269943164;
//# sourceMappingURL=1637269943164-my_init.js.map