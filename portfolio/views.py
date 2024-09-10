from datetime import date
from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView

from datetime import date

from django.shortcuts import render
from .models import SiteSetting, Reel, FilmFrame, BeforeAfter, WorkImage


def home_view(request):
    site_settings = SiteSetting.objects.first()

    reels = Reel.objects.all()

    film_frames = FilmFrame.objects.all()

    before_after_images = BeforeAfter.objects.all()

    context = {
        'site_settings': site_settings,
        'reels': reels,
        'film_frames': film_frames,
        'before_after_images': before_after_images,
    }

    return render(request, 'portfolio/index_page.html', context)


def about_meَ(request):
    site_settings = SiteSetting.objects.first()
    work_img = WorkImage.objects.all()

    context = {
        'site_settings': site_settings,
        'work_img': work_img,
    }

    return render(request, 'portfolio/about_me.html', context)


def site_header_partial(request):
    site_settings = SiteSetting.objects.first()

    context = {
        'site_settings': site_settings,
    }

    return render(request, 'shared/site_header_partial.html', context)


def site_footer_partial(request):
    site_settings = SiteSetting.objects.first()

    context = {
        'site_settings': site_settings,
    }

    return render(request, 'shared/site_footer_partial.html', context)
