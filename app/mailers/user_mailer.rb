class UserMailer < Devise::Mailer
    include Devise::Controllers::UrlHelpers
    default template_path: 'users/mailer' 
    def forgot_password(user)
        @user = user
        mail to: user.email, subject: "Password Reset"
      end
  end
