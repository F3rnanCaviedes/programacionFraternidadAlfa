from django.contrib import admin
from .models import Usuario

@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('name', 'lastName', 'email', 'phone', 'passname') 
    search_fields = ('name', 'lastName', 'email')  
    list_filter = ('email',)  

    fieldsets = (
        (None, {
            'fields': ('name', 'lastName', 'email', 'phone', 'passname')
        }),
        ('Advanced options', {
            'classes': ('collapse',),
            'fields': (),
        }),
    )

    def get_readonly_fields(self, request, obj=None):
        if obj: 
            return ('email',)
        return ()  
