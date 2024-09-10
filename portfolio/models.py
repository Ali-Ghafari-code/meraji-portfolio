from django.db import models


class SiteSetting(models.Model):
    logo = models.ImageField(upload_to='settings/', verbose_name="لوگو", null=True, blank=True)
    banner = models.ImageField(upload_to='settings/', verbose_name="بنر", null=True, blank=True)
    about_me_footer = models.TextField(verbose_name="درباره من در فوتر", null=True, blank=True)
    about_me = models.TextField(verbose_name="درباره من", null=True, blank=True)
    instagram_link = models.URLField(verbose_name="لینک اینستاگرام", blank=True, null=True)
    telegram_link = models.URLField(verbose_name="لینک تلگرام", blank=True, null=True)
    email = models.EmailField(verbose_name="ایمیل", blank=True, null=True)

    def __str__(self):
        return "تنظیمات سایت"


class Reel(models.Model):
    title = models.CharField(max_length=255, verbose_name="عنوان")
    video = models.FileField(upload_to='reels/', verbose_name="ویدیو")
    poster = models.ImageField(upload_to='reels/', verbose_name="پوستر", null=True)

    def __str__(self):
        return self.title


class FilmFrame(models.Model):
    image = models.ImageField(upload_to='frames/', verbose_name="عکس قاب")

    def __str__(self):
        return f"قاب {self.id}"


class WorkImage(models.Model):
    image = models.ImageField(upload_to='work_img/', verbose_name="عکس افتخار همکاری")

    def __str__(self):
        return f"افتخار همکاری {self.id}"


class BeforeAfter(models.Model):
    before_image = models.ImageField(upload_to='before_after/', verbose_name="عکس قبل")
    after_image = models.ImageField(upload_to='before_after/', verbose_name="عکس بعد")

    def __str__(self):
        return f"قبل و بعد {self.id}"
