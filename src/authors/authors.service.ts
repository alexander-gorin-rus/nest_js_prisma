import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  create(createAuthorDto: Prisma.AuthorCreateInput) {
    return this.prisma.author.create({
      data: createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(authorWhereUniqueInput: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where: authorWhereUniqueInput,
    });
  }

  update(where: Prisma.AuthorWhereUniqueInput, data: UpdateAuthorDto) {
    return this.prisma.author.update({
      where,
      data,
    });
  }

  remove(where: Prisma.AuthorWhereUniqueInput) {
    return this.prisma.author.delete({
      where,
    });
  }
}
