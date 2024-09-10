from django.contrib import admin
from .models import SiteSetting, Reel, FilmFrame, BeforeAfter, WorkImage

admin.site.register(SiteSetting)
admin.site.register(Reel)
admin.site.register(FilmFrame)
admin.site.register(BeforeAfter)
admin.site.register(WorkImage)
