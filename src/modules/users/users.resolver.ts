import { Query, Mutation, Args, Resolver } from '@nestjs/graphql'
import {User} from './entities/user'
import { UserService } from './users.service'
import { GetUserArgs } from './dto/args/getUser.args'
import { CreateUserInput } from './dto/inputs/createUser.input'

@Resolver(() => User)
export class UsersResolver {

    constructor(private readonly userService: UserService) {}
    
    @Query(() => User)
    users(@Args() getUserArgs: GetUserArgs): User {
      return this.userService.createUser(getUserArgs)
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput){
      return this.userService.createUserRecord(createUserData)
    }
}