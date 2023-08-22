import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class AuthDto {
  @IsString()
  @IsNotEmpty({
    message: "Bu alan boş bırakılamaz!!"
  })
  name: string

  @IsString()
  @IsNotEmpty({
    message: "Bu alan boş bırakılamaz!!"
  })
  surname: string

  @IsString()
  @IsEmail()
  @IsNotEmpty({
    message: "Bu alan boş bırakılamaz!!"
  })
  email: string

  @IsString()
  @IsNotEmpty()
  @Length(6, 25, {
    message: "Şifreniz 6-25 karakterden oluşmalıdır."
  })
  password: string
}