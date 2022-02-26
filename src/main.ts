import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";


@Controller()
class FirstController {

    @Get()
    helloWorld() {
        return 'Hello World'
    }
}


@Module({
    controllers: [FirstController]
})

class AppModule {

}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000)
}

bootstrap();