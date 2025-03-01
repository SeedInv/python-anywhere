# Generated by Django 4.1 on 2025-01-16 14:35

from django.db import migrations, models

def set_default_required_deposit(apps, schema_editor):
    InvestmentPlan = apps.get_model('investment', 'InvestmentPlan')
    InvestmentPlan.objects.filter(required_deposit__isnull=True).update(required_deposit=0)

class Migration(migrations.Migration):

    dependencies = [
        ('investment', '0004_alter_investmentplan_required_deposit'),
    ]

    operations = [
        migrations.AddField(
            model_name='investmentplan',
            name='required_deposit',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True, blank=True),
        ),
        migrations.RunPython(set_default_required_deposit),
    ]
