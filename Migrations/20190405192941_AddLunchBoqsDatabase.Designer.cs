﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using content;
using lunchboqs;

namespace content.Migrations
{
  [DbContext(typeof(DatabaseContext))]
  [Migration("20190405192941_AddLunchBoqsDatabase")]
  partial class AddLunchBoqsDatabase
  {
    protected override void BuildTargetModel(ModelBuilder modelBuilder)
    {
#pragma warning disable 612, 618
      modelBuilder
          .HasAnnotation("ChangeDetector.SkipDetectChanges", "true")
          .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
          .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
          .HasAnnotation("Relational:MaxIdentifierLength", 63);
#pragma warning restore 612, 618
    }
  }
}
