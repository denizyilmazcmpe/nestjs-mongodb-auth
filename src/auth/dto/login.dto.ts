import { IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
  @IsString()
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