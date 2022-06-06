import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export default class hotels_csv extends BaseEntity {

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    cuisines: string;

    @Column()
    @Field(() => String)
    featured_image: string;

    @PrimaryGeneratedColumn()
    @Field(() => String)
    id: string;

}