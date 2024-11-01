.class public Lcom/github/catvod/spider/Sp360;
.super Lcom/github/catvod/crawler/Spider;


# instance fields
.field private ba:Ljava/lang/String;

.field private bb:Lcom/google/gson/JsonObject;


# direct methods
.method private static constructor <clinit>()V
    .registers 4

    const-wide v0, 0x1aabd65ba8d7cL

    sget v2, Lcom/github/catvod/spider/c;->a:I

    int-to-long v2, v2

    xor-long/2addr v0, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    const-wide v0, 0x1aae665ba8c19L

    sget v2, Lcom/github/catvod/spider/b;->a:I

    int-to-long v2, v2

    xor-long/2addr v0, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    const-wide v0, 0x1ab1065ba8c19L

    sget v2, Lcom/github/catvod/spider/b;->a:I

    int-to-long v2, v2

    xor-long/2addr v0, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    const-wide v0, 0x1ab3565ba8d7cL

    sget v2, Lcom/github/catvod/spider/c;->a:I

    int-to-long v2, v2

    xor-long/2addr v0, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    return-void
.end method

.method public constructor <init>()V
    .registers 11

    const-wide v8, 0x192a05b6d91L

    const-wide/16 v6, 0x1d91

    const-wide/16 v4, -0x1

    invoke-direct {p0}, Lcom/github/catvod/crawler/Spider;-><init>()V

    const-wide v0, -0x1919465ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v2, v2

    xor-long/2addr v0, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/github/catvod/spider/Sp360;->ba:Ljava/lang/String;

    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    new-instance v1, Ljava/util/Date;

    xor-long v2, v8, v4

    and-long/2addr v2, v6

    xor-long/2addr v4, v6

    and-long/2addr v4, v8

    or-long/2addr v2, v4

    invoke-direct {v1, v2, v3}, Ljava/util/Date;-><init>(J)V

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/q/w;->bo(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v1

    const/16 v0, 0x650

    :goto_31
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_6e

    goto :goto_31

    :cond_37
    :sswitch_37
    const/16 v0, 0x68e

    goto :goto_31

    :sswitch_3a
    if-eqz v1, :cond_37

    const/16 v0, 0x6ad

    goto :goto_31

    :sswitch_3f
    new-instance v0, Ljava/lang/Throwable;

    invoke-static {}, Lcom/github/catvod/spider/a;->az()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/Throwable;-><init>(Ljava/lang/String;)V

    throw v0

    :sswitch_49
    invoke-static {}, Lcom/github/catvod/spider/a;->bg()I

    move-result v1

    const/16 v0, 0x6cc

    :goto_4f
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_80

    goto :goto_4f

    :sswitch_55
    if-ltz v1, :cond_5a

    const/16 v0, 0x729

    goto :goto_4f

    :cond_5a
    :sswitch_5a
    const/16 v0, 0x70a

    goto :goto_4f

    :sswitch_5d
    const-string v0, "8gNrYMgJXlTkpNLXRgY58emXo1z"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/q/w;->db(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/Integer;->decode(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v0

    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {v1, v0}, Ljava/io/PrintStream;->println(Ljava/lang/Object;)V

    :sswitch_6c
    return-void

    nop

    :sswitch_data_6e
    .sparse-switch
        0xe -> :sswitch_37
        0x31 -> :sswitch_3a
        0xcc -> :sswitch_3f
        0xef -> :sswitch_49
    .end sparse-switch

    :sswitch_data_80
    .sparse-switch
        0x11 -> :sswitch_55
        0x36 -> :sswitch_5a
        0x1d7 -> :sswitch_6c
        0x1f4 -> :sswitch_5d
    .end sparse-switch
.end method

.method public static a(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;
    .registers 5

    invoke-static {}, Lcom/github/catvod/spider/merge/q/w;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2c

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/lang/String;

    check-cast p1, [Ljava/lang/Object;

    check-cast p2, Ljava/lang/StringBuilder;

    invoke-static {p0, p1, p2}, Lcom/github/catvod/spider/merge/ao/ap;->b(Ljava/lang/String;[Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1e
    return-object v0

    :sswitch_1f
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_22
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3e

    goto :goto_22

    :sswitch_28
    const/16 v1, 0x6eb

    goto :goto_22

    nop

    :sswitch_data_2c
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1f
    .end sparse-switch

    :sswitch_data_3e
    .sparse-switch
        0x11 -> :sswitch_28
        0x36 -> :sswitch_1e
    .end sparse-switch
.end method

.method public static aa(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_4c

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->f(Ljava/lang/String;)V

    :sswitch_1b
    invoke-static {}, Lcom/github/catvod/spider/a;->bg()I

    move-result v1

    const/16 v0, 0x6cc

    :goto_21
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_5e

    goto :goto_21

    :sswitch_27
    if-ltz v1, :cond_2c

    const/16 v0, 0x729

    goto :goto_21

    :cond_2c
    :sswitch_2c
    const/16 v0, 0x70a

    goto :goto_21

    :sswitch_2f
    const-string v0, "FlEe2a"

    invoke-static {v0}, Lcom/github/catvod/spider/c;->ep(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/Long;->valueOf(Ljava/lang/String;)Ljava/lang/Long;

    move-result-object v0

    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {v1, v0}, Ljava/io/PrintStream;->println(Ljava/lang/Object;)V

    :sswitch_3e
    return-void

    :sswitch_3f
    const/16 v0, 0x748

    :goto_41
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_70

    goto :goto_41

    :sswitch_47
    const v0, 0xbe22

    goto :goto_41

    nop

    :sswitch_data_4c
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_3f
    .end sparse-switch

    :sswitch_data_5e
    .sparse-switch
        0x11 -> :sswitch_27
        0x36 -> :sswitch_2c
        0x1d7 -> :sswitch_3e
        0x1f4 -> :sswitch_2f
    .end sparse-switch

    :sswitch_data_70
    .sparse-switch
        0x11 -> :sswitch_47
        0xb97b -> :sswitch_1b
    .end sparse-switch
.end method

.method public static ab(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->c(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static ac(JLjava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;
    .registers 6

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p2, Ljava/lang/StringBuilder;

    check-cast p3, Ljava/lang/String;

    invoke-static {p0, p1, p2, p3}, Lcom/github/catvod/spider/merge/bv/b;->b(JLjava/lang/StringBuilder;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static ad(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/g;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/g;->t(Ljava/lang/String;)Lcom/github/catvod/spider/merge/ck/g;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static ae(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/merge/q/w;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/g;

    check-cast p1, Ljava/util/Map;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/g;->m(Ljava/util/Map;)Lcom/github/catvod/spider/merge/ck/g;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static af(Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/g;

    invoke-virtual {p0}, Lcom/github/catvod/spider/merge/ck/g;->l()Lcom/github/catvod/spider/merge/ck/g;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static ag(J)Ljava/lang/String;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_26

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    invoke-static {p0, p1}, Lcom/github/catvod/spider/merge/d/b;->a(J)Ljava/lang/String;

    move-result-object v0

    :sswitch_18
    return-object v0

    :sswitch_19
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1c
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_38

    goto :goto_1c

    :sswitch_22
    const/16 v1, 0x6eb

    goto :goto_1c

    nop

    :sswitch_data_26
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_19
    .end sparse-switch

    :sswitch_data_38
    .sparse-switch
        0x11 -> :sswitch_22
        0x36 -> :sswitch_18
    .end sparse-switch
.end method

.method public static ah(JLjava/lang/Object;)Ljava/lang/String;
    .registers 5

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p2, Lcom/google/gson/JsonObject;

    invoke-static {p0, p1, p2}, Lcom/github/catvod/spider/merge/ao/ar;->a(JLcom/google/gson/JsonObject;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static ai(Ljava/lang/Object;)Ljava/util/Set;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonObject;

    invoke-virtual {p0}, Lcom/google/gson/JsonObject;->keySet()Ljava/util/Set;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static aj(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;
    .registers 5

    invoke-static {}, Lcom/github/catvod/spider/merge/q/w;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2c

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/util/List;

    check-cast p1, Ljava/util/List;

    check-cast p2, Lcom/google/gson/JsonElement;

    invoke-static {p0, p1, p2}, Lcom/github/catvod/spider/merge/ck/g;->d(Ljava/util/List;Ljava/util/List;Lcom/google/gson/JsonElement;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1e
    return-object v0

    :sswitch_1f
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_22
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3e

    goto :goto_22

    :sswitch_28
    const/16 v1, 0x6eb

    goto :goto_22

    nop

    :sswitch_data_2c
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1f
    .end sparse-switch

    :sswitch_data_3e
    .sparse-switch
        0x11 -> :sswitch_28
        0x36 -> :sswitch_1e
    .end sparse-switch
.end method

.method public static ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonObject;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/google/gson/JsonObject;->getAsJsonArray(Ljava/lang/String;)Lcom/google/gson/JsonArray;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static al(Ljava/lang/Object;)I
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonObject;

    invoke-virtual {p0}, Lcom/google/gson/JsonObject;->size()I

    move-result v0

    :sswitch_1a
    return v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static am(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;
    .registers 6

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2e

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/Sp360;

    check-cast p1, Ljava/lang/String;

    check-cast p2, Ljava/lang/String;

    check-cast p3, Ljava/lang/String;

    invoke-direct {p0, p1, p2, p3}, Lcom/github/catvod/spider/Sp360;->bd(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/gson/JsonObject;

    move-result-object v0

    :sswitch_20
    return-object v0

    :sswitch_21
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_24
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_40

    goto :goto_24

    :sswitch_2a
    const/16 v1, 0x6eb

    goto :goto_24

    nop

    :sswitch_data_2e
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_21
    .end sparse-switch

    :sswitch_data_40
    .sparse-switch
        0x11 -> :sswitch_2a
        0x36 -> :sswitch_20
    .end sparse-switch
.end method

.method public static an(Ljava/lang/Object;)I
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonArray;

    invoke-virtual {p0}, Lcom/google/gson/JsonArray;->size()I

    move-result v0

    :sswitch_1a
    return v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static ao(Ljava/lang/Object;)Z
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonElement;

    invoke-virtual {p0}, Lcom/google/gson/JsonElement;->isJsonNull()Z

    move-result v0

    :sswitch_1a
    return v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static ap(Ljava/lang/Object;)Ljava/lang/String;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/g;

    invoke-virtual {p0}, Lcom/github/catvod/spider/merge/ck/g;->o()Ljava/lang/String;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static aq(JLjava/lang/Object;)Z
    .registers 5

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p2, Lcom/google/gson/JsonObject;

    invoke-static {p0, p1, p2}, Lcom/github/catvod/spider/merge/j/b;->b(JLcom/google/gson/JsonObject;)Z

    move-result v0

    :sswitch_1a
    return v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static ar(Ljava/lang/Object;)Lcom/google/gson/JsonObject;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_26

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/Sp360;

    iget-object v0, p0, Lcom/github/catvod/spider/Sp360;->bb:Lcom/google/gson/JsonObject;

    :sswitch_18
    return-object v0

    :sswitch_19
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1c
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_38

    goto :goto_1c

    :sswitch_22
    const/16 v1, 0x6eb

    goto :goto_1c

    nop

    :sswitch_data_26
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_19
    .end sparse-switch

    :sswitch_data_38
    .sparse-switch
        0x11 -> :sswitch_22
        0x36 -> :sswitch_18
    .end sparse-switch
.end method

.method public static as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/lang/String;

    invoke-static {p0}, Lcom/github/catvod/spider/merge/q/b;->h(Ljava/lang/String;)Lcom/google/gson/JsonObject;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static at(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_4c

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->d(Ljava/lang/String;)V

    :sswitch_1b
    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x6cc

    :goto_21
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_5e

    goto :goto_21

    :sswitch_27
    if-gtz v1, :cond_2c

    const/16 v0, 0x729

    goto :goto_21

    :cond_2c
    :sswitch_2c
    const/16 v0, 0x70a

    goto :goto_21

    :sswitch_2f
    const-string v0, "gkYkbV"

    invoke-static {v0}, Lcom/github/catvod/spider/c;->ep(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(Ljava/lang/String;)Ljava/lang/Integer;

    move-result-object v0

    sget-object v1, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {v1, v0}, Ljava/io/PrintStream;->println(Ljava/lang/Object;)V

    :sswitch_3e
    return-void

    :sswitch_3f
    const/16 v0, 0x748

    :goto_41
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_70

    goto :goto_41

    :sswitch_47
    const v0, 0xbe22

    goto :goto_41

    nop

    :sswitch_data_4c
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_3f
    .end sparse-switch

    :sswitch_data_5e
    .sparse-switch
        0x11 -> :sswitch_27
        0x36 -> :sswitch_2c
        0x1d7 -> :sswitch_3e
        0x1f4 -> :sswitch_2f
    .end sparse-switch

    :sswitch_data_70
    .sparse-switch
        0x11 -> :sswitch_47
        0xb97b -> :sswitch_1b
    .end sparse-switch
.end method

.method public static au(Ljava/lang/Object;)I
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonElement;

    invoke-virtual {p0}, Lcom/google/gson/JsonElement;->getAsInt()I

    move-result v0

    :sswitch_1a
    return v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static av(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->n(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static aw(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->e(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonElement;

    invoke-virtual {p0}, Lcom/google/gson/JsonElement;->getAsJsonObject()Lcom/google/gson/JsonObject;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static ay(Ljava/lang/Object;)Z
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ac/a;

    invoke-virtual {p0}, Lcom/github/catvod/spider/merge/ac/a;->i()Z

    move-result v0

    :sswitch_1a
    return v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/lang/String;

    check-cast p1, Ljava/util/Map;

    invoke-static {p0, p1}, Lcom/github/catvod/spider/merge/cc/g;->l(Ljava/lang/String;Ljava/util/Map;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method private bc(Lcom/google/gson/JsonArray;)Ljava/lang/String;
    .registers 8

    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    invoke-static {p1}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v2

    :sswitch_9
    invoke-static {v2}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v3

    const/16 v0, 0x650

    :goto_f
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_48

    goto :goto_f

    :cond_15
    :sswitch_15
    const/16 v0, 0x68e

    goto :goto_f

    :sswitch_18
    if-eqz v3, :cond_15

    const/16 v0, 0x6ad

    goto :goto_f

    :sswitch_1d
    invoke-static {v2}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/google/gson/JsonElement;

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const/16 v0, 0x6cc

    :goto_2c
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_5a

    goto :goto_2c

    :sswitch_32
    const/16 v0, 0x6eb

    goto :goto_2c

    :sswitch_35
    const-wide v2, 0x1a9f265ba8ff5L

    sget v0, Lcom/github/catvod/spider/a;->a:I

    int-to-long v4, v0

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/q/w;->ah(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    return-object v0

    nop

    :sswitch_data_48
    .sparse-switch
        0xe -> :sswitch_15
        0x31 -> :sswitch_18
        0xcc -> :sswitch_1d
        0xef -> :sswitch_35
    .end sparse-switch

    :sswitch_data_5a
    .sparse-switch
        0x11 -> :sswitch_32
        0x36 -> :sswitch_9
    .end sparse-switch
.end method

.method private bd(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/google/gson/JsonObject;
    .registers 16

    const/4 v7, 0x0

    const-wide/16 v8, 0x0

    const-wide/16 v10, 0x0

    const/4 v5, 0x0

    const/4 v3, 0x0

    const/4 v0, 0x0

    const/4 v2, 0x0

    const/4 v4, 0x0

    const/4 v1, 0x0

    const-string v6, "ۤۢۨ"

    :goto_d
    invoke-static {v6}, Lcom/github/catvod/spider/c;->af(Ljava/lang/Object;)I

    move-result v6

    sparse-switch v6, :sswitch_data_82

    const/4 v6, 0x3

    aput-object p3, v3, v6

    const-string v6, "ۥ۟ۥ"

    goto :goto_d

    :sswitch_1a
    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    const-string v6, "۠ۤۡ"

    goto :goto_d

    :sswitch_21
    const/4 v6, 0x1

    aput-object p1, v3, v6

    const-string v6, "ۣ۟ۡ"

    goto :goto_d

    :sswitch_27
    const/4 v3, 0x4

    new-array v3, v3, [Ljava/lang/Object;

    const-string v6, "ۨۡۡ"

    goto :goto_d

    :sswitch_2d
    sget v7, Lcom/github/catvod/spider/a;->a:I

    const-string v6, "ۨۥۣ"

    goto :goto_d

    :sswitch_32
    const/4 v6, 0x0

    aput-object v0, v3, v6

    const-string v6, "ۢۥۢ"

    goto :goto_d

    :sswitch_38
    invoke-static {v5, v3}, Lcom/github/catvod/spider/a;->dv(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    const-string v6, "۠۟ۤ"

    goto :goto_d

    :sswitch_3f
    sget v7, Lcom/github/catvod/spider/d;->a:I

    const-string v6, "ۥ۟ۢ"

    goto :goto_d

    :sswitch_44
    int-to-long v8, v7

    const-string v6, "۠۟ۧ"

    goto :goto_d

    :sswitch_48
    const-wide v10, -0x1a9cd65ba8ce1L

    xor-long/2addr v10, v8

    const-string v6, "ۡ۟ۤ"

    goto :goto_d

    :sswitch_51
    const-wide v10, 0x1a9b565ba8ff5L

    xor-long/2addr v10, v8

    const-string v6, "ۣۨۤ"

    goto :goto_d

    :sswitch_5a
    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v1

    const-string v6, "ۣۤۧ"

    goto :goto_d

    :sswitch_61
    const/4 v6, 0x2

    aput-object p2, v3, v6

    const-string v6, "ۢۨۤ"

    goto :goto_d

    :sswitch_67
    int-to-long v8, v7

    const-string v6, "ۦۣ۠"

    goto :goto_d

    :sswitch_6b
    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    const-string v6, "ۨ۟ۡ"

    goto :goto_d

    :sswitch_72
    invoke-static {v2, v4}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    const-string v6, "ۣۤۤ"

    goto :goto_d

    :sswitch_79
    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v4

    const-string v6, "ۥ۟۠"

    goto :goto_d

    :sswitch_80
    return-object v1

    nop

    :sswitch_data_82
    .sparse-switch
        0x1aa741 -> :sswitch_61
        0x1aaac5 -> :sswitch_79
        0x1aaac8 -> :sswitch_48
        0x1aab5d -> :sswitch_27
        0x1aae86 -> :sswitch_6b
        0x1ab2ff -> :sswitch_21
        0x1ab6a3 -> :sswitch_5a
        0x1ab71f -> :sswitch_1a
        0x1aba2a -> :sswitch_2d
        0x1aba48 -> :sswitch_80
        0x1abd86 -> :sswitch_72
        0x1abd88 -> :sswitch_44
        0x1abd8b -> :sswitch_38
        0x1ac1c3 -> :sswitch_51
        0x1ac8ca -> :sswitch_32
        0x1ac908 -> :sswitch_3f
        0x1ac986 -> :sswitch_67
    .end sparse-switch
.end method

.method public static c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonObject;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/google/gson/JsonObject;->get(Ljava/lang/String;)Lcom/google/gson/JsonElement;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static d(Ljava/lang/Object;)Ljava/util/Iterator;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonArray;

    invoke-virtual {p0}, Lcom/google/gson/JsonArray;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static e(Ljava/lang/Object;)Ljava/util/HashMap;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/Sp360;

    invoke-virtual {p0}, Lcom/github/catvod/spider/Sp360;->az()Ljava/util/HashMap;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static f(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->j(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static g(Ljava/lang/Object;I)Lcom/google/gson/JsonElement;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonArray;

    invoke-virtual {p0, p1}, Lcom/google/gson/JsonArray;->get(I)Lcom/google/gson/JsonElement;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static h(Ljava/lang/Object;)Ljava/lang/StringBuilder;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/merge/q/w;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/lang/String;

    invoke-static {p0}, Lcom/github/catvod/spider/merge/cp/m;->a(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/merge/q/w;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonObject;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/google/gson/JsonObject;->getAsJsonObject(Ljava/lang/String;)Lcom/google/gson/JsonObject;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static j()Lcom/github/catvod/spider/merge/ac/a;
    .registers 2

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_26

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    invoke-static {}, Lcom/github/catvod/spider/Init;->config()Lcom/github/catvod/spider/merge/ac/a;

    move-result-object v0

    :sswitch_18
    return-object v0

    :sswitch_19
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1c
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_38

    goto :goto_1c

    :sswitch_22
    const/16 v1, 0x6eb

    goto :goto_1c

    nop

    :sswitch_data_26
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_19
    .end sparse-switch

    :sswitch_data_38
    .sparse-switch
        0x11 -> :sswitch_22
        0x36 -> :sswitch_18
    .end sparse-switch
.end method

.method public static k(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->b(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static l(Ljava/lang/Object;Ljava/lang/Object;)Z
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonObject;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/google/gson/JsonObject;->has(Ljava/lang/String;)Z

    move-result v0

    :sswitch_1c
    return v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static m(Ljava/lang/Object;)Ljava/lang/String;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    invoke-static {p0}, Lcom/github/catvod/spider/merge/ck/g;->f(Lcom/github/catvod/spider/merge/ck/d;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static n(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 5

    invoke-static {}, Lcom/github/catvod/spider/merge/q/w;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_4c

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->r(Ljava/lang/String;)V

    :sswitch_1b
    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x6cc

    :goto_21
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_5e

    goto :goto_21

    :sswitch_27
    if-ltz v1, :cond_2c

    const/16 v0, 0x729

    goto :goto_21

    :cond_2c
    :sswitch_2c
    const/16 v0, 0x70a

    goto :goto_21

    :sswitch_2f
    const-string v0, "EGoVfTaqxnJa1q14zI18AXDXs"

    invoke-static {v0}, Lcom/github/catvod/spider/d;->bb(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/Long;->parseLong(Ljava/lang/String;)J

    move-result-wide v0

    sget-object v2, Ljava/lang/System;->out:Ljava/io/PrintStream;

    invoke-virtual {v2, v0, v1}, Ljava/io/PrintStream;->println(J)V

    :sswitch_3e
    return-void

    :sswitch_3f
    const/16 v0, 0x748

    :goto_41
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_70

    goto :goto_41

    :sswitch_47
    const v0, 0xbe22

    goto :goto_41

    nop

    :sswitch_data_4c
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_3f
    .end sparse-switch

    :sswitch_data_5e
    .sparse-switch
        0x11 -> :sswitch_27
        0x36 -> :sswitch_2c
        0x1d7 -> :sswitch_3e
        0x1f4 -> :sswitch_2f
    .end sparse-switch

    :sswitch_data_70
    .sparse-switch
        0x11 -> :sswitch_47
        0xb97b -> :sswitch_1b
    .end sparse-switch
.end method

.method public static o(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->h(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static p(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/Sp360;

    check-cast p1, Lcom/google/gson/JsonArray;

    invoke-direct {p0, p1}, Lcom/github/catvod/spider/Sp360;->bc(Lcom/google/gson/JsonArray;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static q(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->p(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static r(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 7

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2e

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/lang/String;

    check-cast p1, Ljava/lang/String;

    check-cast p2, Ljava/lang/String;

    check-cast p3, Ljava/lang/String;

    check-cast p4, Ljava/util/ArrayList;

    invoke-static {p0, p1, p2, p3, p4}, Lcom/github/catvod/spider/merge/ao/ar;->b(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/ArrayList;)V

    :sswitch_21
    return-void

    :sswitch_22
    const/16 v0, 0x6cc

    :goto_24
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_40

    goto :goto_24

    :sswitch_2a
    const/16 v0, 0x6eb

    goto :goto_24

    nop

    :sswitch_data_2e
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_22
    .end sparse-switch

    :sswitch_data_40
    .sparse-switch
        0x11 -> :sswitch_2a
        0x36 -> :sswitch_21
    .end sparse-switch
.end method

.method public static s(Ljava/lang/Object;)Ljava/lang/String;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Ljava/util/List;

    invoke-static {p0}, Lcom/github/catvod/spider/merge/ck/g;->c(Ljava/util/List;)Ljava/lang/String;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static t(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2a

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/g;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/g;->r(Ljava/lang/String;)Lcom/github/catvod/spider/merge/ck/g;

    move-result-object v0

    :sswitch_1c
    return-object v0

    :sswitch_1d
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_20
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3c

    goto :goto_20

    :sswitch_26
    const/16 v1, 0x6eb

    goto :goto_20

    nop

    :sswitch_data_2a
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1d
    .end sparse-switch

    :sswitch_data_3c
    .sparse-switch
        0x11 -> :sswitch_26
        0x36 -> :sswitch_1c
    .end sparse-switch
.end method

.method public static u(Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/g;

    invoke-virtual {p0}, Lcom/github/catvod/spider/merge/ck/g;->y()Lcom/github/catvod/spider/merge/ck/g;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static v(Ljava/lang/Object;)Ljava/lang/String;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_26

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/Sp360;

    iget-object v0, p0, Lcom/github/catvod/spider/Sp360;->ba:Ljava/lang/String;

    :sswitch_18
    return-object v0

    :sswitch_19
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1c
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_38

    goto :goto_1c

    :sswitch_22
    const/16 v1, 0x6eb

    goto :goto_1c

    nop

    :sswitch_data_26
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_19
    .end sparse-switch

    :sswitch_data_38
    .sparse-switch
        0x11 -> :sswitch_22
        0x36 -> :sswitch_18
    .end sparse-switch
.end method

.method public static w(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/d;->o()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-gtz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->l(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method

.method public static x(Ljava/lang/Object;)Ljava/lang/String;
    .registers 3

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/google/gson/JsonElement;

    invoke-virtual {p0}, Lcom/google/gson/JsonElement;->getAsString()Ljava/lang/String;

    move-result-object v0

    :sswitch_1a
    return-object v0

    :sswitch_1b
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_1e
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v1, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1b
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1a
    .end sparse-switch
.end method

.method public static y(JLjava/lang/Object;Ljava/lang/Object;J)Ljava/lang/String;
    .registers 12

    invoke-static {}, Lcom/github/catvod/spider/b;->d()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_2e

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-ltz v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    move-object v2, p2

    check-cast v2, Ljava/util/HashMap;

    move-object v3, p3

    check-cast v3, Ljava/lang/String;

    move-wide v0, p0

    move-wide v4, p4

    invoke-static/range {v0 .. v5}, Lcom/github/catvod/spider/merge/cm/t;->a(JLjava/util/HashMap;Ljava/lang/String;J)Ljava/lang/String;

    move-result-object v0

    :sswitch_20
    return-object v0

    :sswitch_21
    const/4 v0, 0x0

    const/16 v1, 0x6cc

    :goto_24
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_40

    goto :goto_24

    :sswitch_2a
    const/16 v1, 0x6eb

    goto :goto_24

    nop

    :sswitch_data_2e
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_21
    .end sparse-switch

    :sswitch_data_40
    .sparse-switch
        0x11 -> :sswitch_2a
        0x36 -> :sswitch_20
    .end sparse-switch
.end method

.method public static z(Ljava/lang/Object;Ljava/lang/Object;)V
    .registers 4

    invoke-static {}, Lcom/github/catvod/spider/c;->b()I

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-lez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    check-cast p0, Lcom/github/catvod/spider/merge/ck/d;

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, p1}, Lcom/github/catvod/spider/merge/ck/d;->m(Ljava/lang/String;)V

    :sswitch_1b
    return-void

    :sswitch_1c
    const/16 v0, 0x6cc

    :goto_1e
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_3a

    goto :goto_1e

    :sswitch_24
    const/16 v0, 0x6eb

    goto :goto_1e

    nop

    :sswitch_data_28
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1c
    .end sparse-switch

    :sswitch_data_3a
    .sparse-switch
        0x11 -> :sswitch_24
        0x36 -> :sswitch_1b
    .end sparse-switch
.end method


# virtual methods
.method protected final az()Ljava/util/HashMap;
    .registers 15
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/HashMap",
            "<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    const-wide/16 v10, 0x0

    const/4 v7, 0x0

    const/4 v9, 0x0

    const-string v8, "ۧ۟ۦ"

    move-object v6, v7

    move-object v2, v7

    move-object v3, v7

    move-wide v4, v10

    move-wide v0, v10

    move-wide v12, v10

    :goto_c
    invoke-static {v8}, Lcom/github/catvod/spider/c;->af(Ljava/lang/Object;)I

    move-result v7

    sparse-switch v7, :sswitch_data_96

    const-wide v0, -0x1a59e65ba8deeL

    xor-long/2addr v0, v12

    const-string v7, "ۢۤ۟"

    move-object v8, v7

    goto :goto_c

    :sswitch_1d
    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const-string v7, "ۧۨۢ"

    move-object v8, v7

    goto :goto_c

    :sswitch_25
    sget v9, Lcom/github/catvod/spider/merge/q/w;->a:I

    const-string v7, "ۡۦۤ"

    move-object v8, v7

    goto :goto_c

    :sswitch_2b
    int-to-long v10, v9

    const-string v7, "ۤۥ"

    move-object v8, v7

    move-wide v12, v10

    goto :goto_c

    :sswitch_31
    invoke-static/range {v0 .. v5}, Lcom/github/catvod/spider/Sp360;->y(JLjava/lang/Object;Ljava/lang/Object;J)Ljava/lang/String;

    move-result-object v6

    const-string v7, "۠ۧۦ"

    move-object v8, v7

    goto :goto_c

    :sswitch_39
    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const-string v7, "ۣۢۢ"

    move-object v8, v7

    goto :goto_c

    :sswitch_41
    const-wide v0, -0x1a51b65ba8ce1L

    xor-long/2addr v0, v12

    const-string v7, "۟ۥ۟"

    move-object v8, v7

    goto :goto_c

    :sswitch_4b
    sget v9, Lcom/github/catvod/spider/d;->a:I

    const-string v7, "۠۠ۥ"

    move-object v8, v7

    goto :goto_c

    :sswitch_51
    new-instance v2, Ljava/util/HashMap;

    invoke-direct {v2}, Ljava/util/HashMap;-><init>()V

    const-string v7, "ۨۧۨ"

    move-object v8, v7

    goto :goto_c

    :sswitch_5a
    const-wide v4, 0x1a59665ba8d7cL

    xor-long/2addr v4, v12

    const-string v7, "ۣۡ۟"

    move-object v8, v7

    goto :goto_c

    :sswitch_64
    sget v9, Lcom/github/catvod/spider/d;->a:I

    const-string v7, "ۡۢۢ"

    move-object v8, v7

    goto :goto_c

    :sswitch_6a
    int-to-long v10, v9

    const-string v7, "ۧۨۥ"

    move-object v8, v7

    move-wide v12, v10

    goto :goto_c

    :sswitch_70
    invoke-static {v2, v6, v3}, Lcom/github/catvod/spider/a;->eh(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    const-string v7, "ۢۤۦ"

    move-object v8, v7

    goto :goto_c

    :sswitch_77
    sget v9, Lcom/github/catvod/spider/c;->a:I

    const-string v7, "ۤۢۢ"

    move-object v8, v7

    goto :goto_c

    :sswitch_7d
    const-wide v0, -0x1a52665ba8ce1L

    xor-long/2addr v0, v12

    const-string v7, "ۦۢ"

    move-object v8, v7

    goto :goto_c

    :sswitch_87
    int-to-long v10, v9

    const-string v7, "ۥ۠ۧ"

    move-object v8, v7

    move-wide v12, v10

    goto :goto_c

    :sswitch_8d
    int-to-long v10, v9

    const-string v7, "ۨۢۥ"

    move-object v8, v7

    move-wide v12, v10

    goto/16 :goto_c

    :sswitch_94
    return-object v2

    nop

    :sswitch_data_96
    .sparse-switch
        0xdcbc -> :sswitch_77
        0x1aa7b9 -> :sswitch_1d
        0x1aaae5 -> :sswitch_8d
        0x1aabbf -> :sswitch_25
        0x1aaee1 -> :sswitch_6a
        0x1aaefd -> :sswitch_31
        0x1aaf5f -> :sswitch_2b
        0x1ab2c1 -> :sswitch_70
        0x1ab2dd -> :sswitch_39
        0x1ab2e4 -> :sswitch_94
        0x1aba24 -> :sswitch_87
        0x1abdac -> :sswitch_5a
        0x1ac50e -> :sswitch_51
        0x1ac621 -> :sswitch_64
        0x1ac624 -> :sswitch_7d
        0x1ac92b -> :sswitch_41
        0x1ac9c9 -> :sswitch_4b
    .end sparse-switch
.end method

.method public categoryContent(Ljava/lang/String;Ljava/lang/String;ZLjava/util/HashMap;)Ljava/lang/String;
    .registers 19
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Z",
            "Ljava/util/HashMap",
            "<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/lang/String;"
        }
    .end annotation

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v4, 0x1a62d65ba8c19L

    sget v3, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v2, p1}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v4, 0x1a65e65ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-object/from16 v0, p2

    invoke-static {v2, v0}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v2}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v7

    const-wide v2, -0x1a66f65ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    move-object/from16 v0, p4

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    const/16 v2, 0x650

    :goto_46
    xor-int/lit16 v2, v2, 0x661

    sparse-switch v2, :sswitch_data_522

    goto :goto_46

    :cond_4c
    :sswitch_4c
    const/16 v2, 0x68e

    goto :goto_46

    :sswitch_4f
    if-nez v3, :cond_4c

    const/16 v2, 0x6ad

    goto :goto_46

    :sswitch_54
    const-wide v2, 0x1a67465ba8d7cL

    sget v4, Lcom/github/catvod/spider/c;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const-wide v4, 0x1a67965ba8d7cL

    sget v3, Lcom/github/catvod/spider/c;->a:I

    int-to-long v8, v3

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    move-object/from16 v0, p4

    invoke-static {v0, v2, v3}, Lcom/github/catvod/spider/a;->eh(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :sswitch_73
    const-wide v2, -0x1a68165ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    move-object/from16 v0, p4

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    const/16 v2, 0x6cc

    :goto_88
    xor-int/lit16 v2, v2, 0x6dd

    sparse-switch v2, :sswitch_data_534

    goto :goto_88

    :sswitch_8e
    if-nez v3, :cond_93

    const/16 v2, 0x729

    goto :goto_88

    :cond_93
    :sswitch_93
    const/16 v2, 0x70a

    goto :goto_88

    :sswitch_96
    const-wide v2, -0x1a68565ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const-wide v4, 0x1a68965ba8d7cL

    sget v3, Lcom/github/catvod/spider/c;->a:I

    int-to-long v8, v3

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    move-object/from16 v0, p4

    invoke-static {v0, v2, v3}, Lcom/github/catvod/spider/a;->eh(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :sswitch_b5
    const-wide v2, -0x1a68a65ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    move-object/from16 v0, p4

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    const/16 v2, 0x748

    :goto_ca
    xor-int/lit16 v2, v2, 0x759

    sparse-switch v2, :sswitch_data_546

    goto :goto_ca

    :sswitch_d0
    if-nez v3, :cond_d6

    const v2, 0xbe60

    goto :goto_ca

    :cond_d6
    :sswitch_d6
    const v2, 0xbe41

    goto :goto_ca

    :sswitch_da
    const-wide v2, -0x1a68f65ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const-wide v4, 0x1a69465ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v8, v3

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    move-object/from16 v0, p4

    invoke-static {v0, v2, v3}, Lcom/github/catvod/spider/a;->eh(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :sswitch_f9
    const-wide v2, 0x1a69565ba8d7cL

    sget v4, Lcom/github/catvod/spider/c;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    move-object/from16 v0, p4

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    const v2, 0xbe7f

    :goto_10f
    const v4, 0xbe90

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_558

    goto :goto_10f

    :cond_117
    :sswitch_117
    const v2, 0xbebd

    goto :goto_10f

    :sswitch_11b
    if-nez v3, :cond_117

    const v2, 0xbedc

    goto :goto_10f

    :sswitch_121
    const-wide v2, -0x1a69a65ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const-wide v4, -0x1a69f65ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v3

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    move-object/from16 v0, p4

    invoke-static {v0, v2, v3}, Lcom/github/catvod/spider/a;->eh(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :sswitch_140
    const-wide v2, 0x1a6a065ba8ff5L

    sget v4, Lcom/github/catvod/spider/a;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    move-object/from16 v0, p4

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    const v2, 0xbefb

    :goto_156
    const v4, 0xbf0c

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_56a

    goto :goto_156

    :cond_15e
    :sswitch_15e
    const v2, 0xbf39

    goto :goto_156

    :sswitch_162
    if-nez v3, :cond_15e

    const v2, 0xc1e3

    goto :goto_156

    :sswitch_168
    const-wide v2, -0x1a6a465ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const-wide v4, -0x1a6a865ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v3

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    move-object/from16 v0, p4

    invoke-static {v0, v2, v3}, Lcom/github/catvod/spider/a;->eh(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :sswitch_187
    const-wide v2, 0x1a6a965ba8c19L

    sget v4, Lcom/github/catvod/spider/b;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    move-object/from16 v0, p4

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    const-wide v4, -0x1a6ae65ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v3

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    move-object/from16 v0, p4

    invoke-static {v0, v3}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    const-wide v4, 0x1a6b265ba8c19L

    sget v6, Lcom/github/catvod/spider/b;->a:I

    int-to-long v8, v6

    xor-long/2addr v4, v8

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    move-object/from16 v0, p4

    invoke-static {v0, v4}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    const-wide v8, -0x1a6b765ba8deeL

    sget v5, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v10, v5

    xor-long/2addr v8, v10

    invoke-static {v8, v9}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    move-object/from16 v0, p4

    invoke-static {v0, v5}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Ljava/lang/String;

    const-wide v8, 0x1a6bc65ba8d7cL

    sget v6, Lcom/github/catvod/spider/c;->a:I

    int-to-long v10, v6

    xor-long/2addr v8, v10

    invoke-static {v8, v9}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v6

    move-object/from16 v0, p4

    invoke-static {v0, v6}, Lcom/github/catvod/spider/c;->ck(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v6

    check-cast v6, Ljava/lang/String;

    invoke-static {v7}, Lcom/github/catvod/spider/Sp360;->h(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v7

    const-wide v8, -0x1a6c065ba8ce1L

    sget v10, Lcom/github/catvod/spider/d;->a:I

    int-to-long v10, v10

    xor-long/2addr v8, v10

    invoke-static {v8, v9}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v8

    const/4 v9, 0x5

    new-array v9, v9, [Ljava/lang/Object;

    const/4 v10, 0x0

    aput-object v2, v9, v10

    const/4 v2, 0x1

    aput-object v3, v9, v2

    const/4 v2, 0x2

    aput-object v4, v9, v2

    const/4 v2, 0x3

    aput-object v5, v9, v2

    const/4 v2, 0x4

    aput-object v6, v9, v2

    invoke-static {v8, v9, v7}, Lcom/github/catvod/spider/Sp360;->a(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v4, -0x1a6e765ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v4, 0x1a6ec65ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    new-instance v5, Ljava/util/ArrayList;

    invoke-direct {v5}, Ljava/util/ArrayList;-><init>()V

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v6

    :sswitch_24e
    invoke-static {v6}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v3

    const v2, 0xc202

    :goto_255
    const v4, 0xc213

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_57c

    goto :goto_255

    :sswitch_25d
    if-eqz v3, :cond_263

    const v2, 0xc25f

    goto :goto_255

    :cond_263
    :sswitch_263
    const v2, 0xc240

    goto :goto_255

    :sswitch_267
    invoke-static {v6}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/google/gson/JsonElement;

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v7

    const-wide v2, -0x1a6f365ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v8, v4

    xor-long/2addr v2, v8

    invoke-static {v2, v3, v7}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v8

    const-wide v2, 0x1a6fc65ba8ff5L

    sget v4, Lcom/github/catvod/spider/a;->a:I

    int-to-long v10, v4

    xor-long/2addr v2, v10

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const-wide v10, -0x1a6fd65ba8ce1L

    sget v3, Lcom/github/catvod/spider/d;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v7, v3}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xc27e

    :goto_29f
    const v9, 0xc28f

    xor-int/2addr v3, v9

    sparse-switch v3, :sswitch_data_58e

    goto :goto_29f

    :cond_2a7
    :sswitch_2a7
    const v3, 0xc2bc

    goto :goto_29f

    :sswitch_2ab
    if-eqz v4, :cond_2a7

    const v3, 0xc2db

    goto :goto_29f

    :sswitch_2b1
    const-wide v10, 0x1a70465ba8d7cL

    sget v3, Lcom/github/catvod/spider/c;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v7, v3}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v3

    invoke-static {v3}, Lcom/github/catvod/spider/Sp360;->ao(Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xc2fa

    :goto_2c9
    const v9, 0xc30b

    xor-int/2addr v3, v9

    sparse-switch v3, :sswitch_data_5a0

    goto :goto_2c9

    :sswitch_2d1
    if-nez v4, :cond_2d7

    const v3, 0xc5e2

    goto :goto_2c9

    :cond_2d7
    :sswitch_2d7
    const v3, 0xc5c3

    goto :goto_2c9

    :sswitch_2db
    const-wide v2, 0x1a70b65ba8d7cL

    sget v4, Lcom/github/catvod/spider/c;->a:I

    int-to-long v10, v4

    xor-long/2addr v2, v10

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v7, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v3

    const-wide v10, -0x1a71265ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v12, v2

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v7, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v4

    const v2, 0xc601

    :goto_308
    const v9, 0xc612

    xor-int/2addr v2, v9

    sparse-switch v2, :sswitch_data_5b2

    goto :goto_308

    :sswitch_310
    if-ne v3, v4, :cond_316

    const v2, 0xc65e

    goto :goto_308

    :cond_316
    :sswitch_316
    const v2, 0xc63f

    goto :goto_308

    :sswitch_31a
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v10, -0x1a71865ba8ce1L

    sget v3, Lcom/github/catvod/spider/d;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v2, v4}, Lcom/github/catvod/spider/d;->dc(Ljava/lang/Object;I)Ljava/lang/StringBuilder;

    const-wide v10, 0x1a71965ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const v4, 0xc67d

    :goto_342
    const v9, 0xc68e

    xor-int/2addr v4, v9

    sparse-switch v4, :sswitch_data_5c4

    goto :goto_342

    :goto_34a
    :sswitch_34a
    invoke-static {v2, v3}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v2}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    :sswitch_351
    invoke-static {p1}, Lcom/github/catvod/spider/Sp360;->h(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v3

    const-wide v10, -0x1a76265ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v10, -0x1a76465ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v7, v4}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v4

    invoke-static {v4}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v3}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v3

    const-wide v10, -0x1a76765ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11, v7}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v4

    new-instance v7, Ljava/lang/StringBuilder;

    invoke-direct {v7}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v10, 0x1a76d65ba8ff5L

    sget v9, Lcom/github/catvod/spider/a;->a:I

    int-to-long v12, v9

    xor-long/2addr v10, v12

    invoke-static {v10, v11, v7, v8}, Lcom/github/catvod/spider/Sp360;->ac(JLjava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v7

    invoke-static {v3, v4, v7, v2, v5}, Lcom/github/catvod/spider/Sp360;->r(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    const v2, 0xd505

    :goto_3a6
    const v3, 0xd516

    xor-int/2addr v2, v3

    sparse-switch v2, :sswitch_data_5ce

    goto :goto_3a6

    :sswitch_3ae
    const v2, 0xd524

    goto :goto_3a6

    :sswitch_3b2
    const v4, 0xc69c

    goto :goto_342

    :sswitch_3b6
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v10, 0x1a71c65ba8d7cL

    sget v4, Lcom/github/catvod/spider/c;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v2, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v2, v3}, Lcom/github/catvod/spider/d;->dc(Ljava/lang/Object;I)Ljava/lang/StringBuilder;

    const-wide v10, 0x1a72065ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v2}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    const v3, 0xc984

    :goto_3e5
    const v4, 0xc995

    xor-int/2addr v3, v4

    sparse-switch v3, :sswitch_data_5d8

    goto :goto_3e5

    :sswitch_3ed
    const v3, 0xc9a3

    goto :goto_3e5

    :sswitch_3f1
    const-wide v10, 0x1a72265ba8c19L

    sget v3, Lcom/github/catvod/spider/b;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v7, v3}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xca00

    :goto_405
    const v9, 0xca11

    xor-int/2addr v3, v9

    sparse-switch v3, :sswitch_data_5e2

    goto :goto_405

    :cond_40d
    :sswitch_40d
    const v3, 0xca3e

    goto :goto_405

    :sswitch_411
    if-eqz v4, :cond_40d

    const v3, 0xca5d

    goto :goto_405

    :sswitch_417
    const-wide v10, -0x1a72665ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v7, v3}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v3

    invoke-static {v3}, Lcom/github/catvod/spider/Sp360;->ao(Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xca7c

    :goto_42f
    const v9, 0xca8d

    xor-int/2addr v3, v9

    sparse-switch v3, :sswitch_data_5f4

    goto :goto_42f

    :sswitch_437
    if-nez v4, :cond_43d

    const v3, 0xcd64

    goto :goto_42f

    :cond_43d
    :sswitch_43d
    const v3, 0xcd45

    goto :goto_42f

    :sswitch_441
    const-wide v2, -0x1a72a65ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v10, v4

    xor-long/2addr v2, v10

    invoke-static {v2, v3, v7}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    const v3, 0xcd83

    :goto_451
    const v4, 0xcd94

    xor-int/2addr v3, v4

    sparse-switch v3, :sswitch_data_606

    goto :goto_451

    :sswitch_459
    const v3, 0xcda2

    goto :goto_451

    :sswitch_45d
    const-wide v10, 0x1a72e65ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v7, v3}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xcdff

    :goto_471
    const v9, 0xce10

    xor-int/2addr v3, v9

    sparse-switch v3, :sswitch_data_610

    goto :goto_471

    :cond_479
    :sswitch_479
    const v3, 0xce3d

    goto :goto_471

    :sswitch_47d
    if-eqz v4, :cond_479

    const v3, 0xd0e7

    goto :goto_471

    :sswitch_483
    const-wide v10, 0x1a73a65ba8c19L

    sget v3, Lcom/github/catvod/spider/b;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v7, v3}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v3

    invoke-static {v3}, Lcom/github/catvod/spider/Sp360;->ao(Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xd106

    :goto_49b
    const v9, 0xd117

    xor-int/2addr v3, v9

    sparse-switch v3, :sswitch_data_622

    goto :goto_49b

    :sswitch_4a3
    if-nez v4, :cond_4a9

    const v3, 0xd163

    goto :goto_49b

    :cond_4a9
    :sswitch_4a9
    const v3, 0xd144

    goto :goto_49b

    :sswitch_4ad
    const-wide v10, 0x1a74665ba8c19L

    sget v3, Lcom/github/catvod/spider/b;->a:I

    int-to-long v12, v3

    xor-long/2addr v10, v12

    invoke-static {v10, v11, v7}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v3

    const-wide v10, -0x1a75265ba8ce1L

    sget v4, Lcom/github/catvod/spider/d;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Lcom/github/catvod/spider/a;->ci(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v9

    const v4, 0xd182

    :goto_4ce
    const v10, 0xd193

    xor-int/2addr v4, v10

    sparse-switch v4, :sswitch_data_634

    goto :goto_4ce

    :sswitch_4d6
    if-nez v9, :cond_4dc

    const v4, 0xd1df

    goto :goto_4ce

    :cond_4dc
    :sswitch_4dc
    const v4, 0xd1c0

    goto :goto_4ce

    :sswitch_4e0
    const-wide v10, 0x1a75765ba8d7cL

    sget v4, Lcom/github/catvod/spider/c;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Lcom/github/catvod/spider/a;->ci(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v9

    const v4, 0xd1fe

    :goto_4f4
    const v10, 0xd20f

    xor-int/2addr v4, v10

    sparse-switch v4, :sswitch_data_646

    goto :goto_4f4

    :sswitch_4fc
    if-nez v9, :cond_502

    const v4, 0xd4e6

    goto :goto_4f4

    :cond_502
    :sswitch_502
    const v4, 0xd4c7

    goto :goto_4f4

    :sswitch_506
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v10, 0x1a75c65ba8ff5L

    sget v4, Lcom/github/catvod/spider/a;->a:I

    int-to-long v12, v4

    xor-long/2addr v10, v12

    invoke-static {v10, v11}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v2, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    goto/16 :goto_34a

    :sswitch_51d
    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->s(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    return-object v2

    :sswitch_data_522
    .sparse-switch
        0xe -> :sswitch_4c
        0x31 -> :sswitch_4f
        0xcc -> :sswitch_54
        0xef -> :sswitch_73
    .end sparse-switch

    :sswitch_data_534
    .sparse-switch
        0x11 -> :sswitch_8e
        0x36 -> :sswitch_93
        0x1d7 -> :sswitch_b5
        0x1f4 -> :sswitch_96
    .end sparse-switch

    :sswitch_data_546
    .sparse-switch
        0x11 -> :sswitch_d0
        0xb918 -> :sswitch_f9
        0xb939 -> :sswitch_da
        0xb97b -> :sswitch_d6
    .end sparse-switch

    :sswitch_data_558
    .sparse-switch
        0xe -> :sswitch_117
        0x2d -> :sswitch_140
        0x4c -> :sswitch_121
        0xef -> :sswitch_11b
    .end sparse-switch

    :sswitch_data_56a
    .sparse-switch
        0x16 -> :sswitch_15e
        0x35 -> :sswitch_187
        0x1f7 -> :sswitch_162
        0x7eef -> :sswitch_168
    .end sparse-switch

    :sswitch_data_57c
    .sparse-switch
        0x11 -> :sswitch_25d
        0x32 -> :sswitch_263
        0x4c -> :sswitch_267
        0x53 -> :sswitch_51d
    .end sparse-switch

    :sswitch_data_58e
    .sparse-switch
        0x12 -> :sswitch_2a7
        0x33 -> :sswitch_3f1
        0x54 -> :sswitch_2b1
        0xf1 -> :sswitch_2ab
    .end sparse-switch

    :sswitch_data_5a0
    .sparse-switch
        0x1f1 -> :sswitch_2d1
        0x6af -> :sswitch_2d7
        0x6c8 -> :sswitch_3f1
        0x6e9 -> :sswitch_2db
    .end sparse-switch

    :sswitch_data_5b2
    .sparse-switch
        0x13 -> :sswitch_310
        0x2d -> :sswitch_3b6
        0x32 -> :sswitch_316
        0x4c -> :sswitch_31a
    .end sparse-switch

    :sswitch_data_5c4
    .sparse-switch
        0x12 -> :sswitch_34a
        0xf3 -> :sswitch_3b2
    .end sparse-switch

    :sswitch_data_5ce
    .sparse-switch
        0x13 -> :sswitch_3ae
        0x32 -> :sswitch_24e
    .end sparse-switch

    :sswitch_data_5d8
    .sparse-switch
        0x11 -> :sswitch_3ed
        0x36 -> :sswitch_351
    .end sparse-switch

    :sswitch_data_5e2
    .sparse-switch
        0xe -> :sswitch_40d
        0x11 -> :sswitch_411
        0x2f -> :sswitch_45d
        0x4c -> :sswitch_417
    .end sparse-switch

    :sswitch_data_5f4
    .sparse-switch
        0xf1 -> :sswitch_437
        0x7ab -> :sswitch_43d
        0x7c8 -> :sswitch_45d
        0x7e9 -> :sswitch_441
    .end sparse-switch

    :sswitch_data_606
    .sparse-switch
        0x17 -> :sswitch_459
        0x36 -> :sswitch_351
    .end sparse-switch

    :sswitch_data_610
    .sparse-switch
        0xe -> :sswitch_479
        0x2d -> :sswitch_351
        0x3ef -> :sswitch_47d
        0x1ef7 -> :sswitch_483
    .end sparse-switch

    :sswitch_data_622
    .sparse-switch
        0x11 -> :sswitch_4a3
        0x32 -> :sswitch_4a9
        0x53 -> :sswitch_351
        0x74 -> :sswitch_4ad
    .end sparse-switch

    :sswitch_data_634
    .sparse-switch
        0x11 -> :sswitch_4d6
        0x32 -> :sswitch_4dc
        0x4c -> :sswitch_4e0
        0x53 -> :sswitch_351
    .end sparse-switch

    :sswitch_data_646
    .sparse-switch
        0x3f1 -> :sswitch_4fc
        0x6a7 -> :sswitch_502
        0x6c8 -> :sswitch_351
        0x6e9 -> :sswitch_506
    .end sparse-switch
.end method

.method public detailContent(Ljava/util/List;)Ljava/lang/String;
    .registers 28
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List",
            "<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/lang/String;"
        }
    .end annotation

    const/4 v2, 0x0

    move-object/from16 v0, p1

    invoke-static {v0, v2}, Lcom/github/catvod/spider/a;->el(Ljava/lang/Object;I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    const-wide v4, -0x1a77465ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/merge/q/w;->fa(Ljava/lang/Object;Ljava/lang/Object;)[Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x0

    aget-object v9, v2, v3

    const/4 v3, 0x1

    aget-object v10, v2, v3

    const-wide v2, 0x1a77665ba8d7cL

    sget v4, Lcom/github/catvod/spider/c;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x3

    new-array v3, v3, [Ljava/lang/Object;

    const/4 v4, 0x0

    const-wide v6, 0x1a78665ba8ff5L

    sget v5, Lcom/github/catvod/spider/a;->a:I

    int-to-long v12, v5

    xor-long/2addr v6, v12

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    aput-object v5, v3, v4

    const/4 v4, 0x1

    aput-object v9, v3, v4

    const/4 v4, 0x2

    aput-object v10, v3, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/a;->dv(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static/range {p0 .. p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v4, 0x1a7ab65ba8ff5L

    sget v3, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v3

    const-wide v4, 0x1a7b065ba8ff5L

    sget v2, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v2

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v11

    const-wide v4, -0x1a7bf65ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v6, v2

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v4

    const-wide v6, -0x1a7cc65ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v12, v2

    xor-long/2addr v6, v12

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v5

    const-wide v6, 0x1a7db65ba8c19L

    sget v2, Lcom/github/catvod/spider/b;->a:I

    int-to-long v12, v2

    xor-long/2addr v6, v12

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v6

    const-wide v12, 0x1a7eb65ba8c19L

    sget v2, Lcom/github/catvod/spider/b;->a:I

    int-to-long v14, v2

    xor-long/2addr v12, v14

    invoke-static {v12, v13}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v12

    new-instance v13, Ljava/util/ArrayList;

    invoke-direct {v13}, Ljava/util/ArrayList;-><init>()V

    new-instance v14, Ljava/util/ArrayList;

    invoke-direct {v14}, Ljava/util/ArrayList;-><init>()V

    const/16 v2, 0x650

    :goto_c8
    xor-int/lit16 v2, v2, 0x661

    sparse-switch v2, :sswitch_data_98c

    goto :goto_c8

    :cond_ce
    :sswitch_ce
    const/16 v2, 0x68e

    goto :goto_c8

    :sswitch_d1
    if-eqz v4, :cond_ce

    const/16 v2, 0x6ad

    goto :goto_c8

    :sswitch_d6
    const-wide v4, -0x1a7f565ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v6, v2

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const/4 v4, 0x0

    :sswitch_e8
    invoke-static {v11}, Lcom/github/catvod/spider/Sp360;->an(Ljava/lang/Object;)I

    move-result v6

    const/16 v5, 0x6cc

    :goto_ee
    xor-int/lit16 v5, v5, 0x6dd

    sparse-switch v5, :sswitch_data_99e

    goto :goto_ee

    :sswitch_f4
    if-ge v4, v6, :cond_f9

    const/16 v5, 0x729

    goto :goto_ee

    :cond_f9
    :sswitch_f9
    const/16 v5, 0x70a

    goto :goto_ee

    :sswitch_fc
    new-instance v15, Ljava/util/ArrayList;

    invoke-direct {v15}, Ljava/util/ArrayList;-><init>()V

    invoke-static {v11, v4}, Lcom/github/catvod/spider/Sp360;->g(Ljava/lang/Object;I)Lcom/google/gson/JsonElement;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v16

    move-object/from16 v0, v16

    invoke-static {v2, v0}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v5

    const/16 v6, 0x748

    :goto_111
    xor-int/lit16 v6, v6, 0x759

    sparse-switch v6, :sswitch_data_9b0

    goto :goto_111

    :sswitch_117
    if-eqz v5, :cond_11d

    const v6, 0xbe60

    goto :goto_111

    :cond_11d
    :sswitch_11d
    const v6, 0xbe41

    goto :goto_111

    :sswitch_121
    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->an(Ljava/lang/Object;)I

    move-result v7

    const v6, 0xbe7f

    :goto_128
    const v8, 0xbe90

    xor-int/2addr v6, v8

    sparse-switch v6, :sswitch_data_9c2

    goto :goto_128

    :cond_130
    :sswitch_130
    const v6, 0xbebd

    goto :goto_128

    :sswitch_134
    if-nez v7, :cond_130

    const v6, 0xbedc

    goto :goto_128

    :sswitch_13a
    move-object/from16 v0, p0

    move-object/from16 v1, v16

    invoke-static {v0, v9, v10, v1}, Lcom/github/catvod/spider/Sp360;->am(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v6

    const-wide v18, 0x1a80265ba8d7cL

    sget v5, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v5

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v6, v5}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v7

    const v5, 0xbefb

    :goto_15d
    const v8, 0xbf0c

    xor-int/2addr v5, v8

    sparse-switch v5, :sswitch_data_9d4

    goto :goto_15d

    :cond_165
    :sswitch_165
    const v5, 0xbf39

    goto :goto_15d

    :sswitch_169
    if-eqz v7, :cond_165

    const v5, 0xc1e3

    goto :goto_15d

    :sswitch_16f
    const v5, 0xc202

    :goto_172
    const v6, 0xc213

    xor-int/2addr v5, v6

    sparse-switch v5, :sswitch_data_9e6

    goto :goto_172

    :sswitch_17a
    const v5, 0xc221

    goto :goto_172

    :sswitch_17e
    const-wide v18, 0x1a80865ba8d7cL

    sget v2, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v2

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v6, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v6, 0x1a80d65ba8c19L

    sget v5, Lcom/github/catvod/spider/b;->a:I

    int-to-long v0, v5

    move-wide/from16 v18, v0

    xor-long v6, v6, v18

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v2, v5}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v6

    move-object/from16 v0, v16

    invoke-static {v6, v0}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    move-object v5, v2

    :goto_1ad
    move-object/from16 v0, v16

    invoke-static {v12, v0}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v2

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->an(Ljava/lang/Object;)I

    move-result v8

    const v7, 0xc27e

    :goto_1be
    const v17, 0xc28f

    xor-int v7, v7, v17

    sparse-switch v7, :sswitch_data_9f0

    goto :goto_1be

    :cond_1c7
    :sswitch_1c7
    const v7, 0xc2bc

    goto :goto_1be

    :sswitch_1cb
    if-gt v2, v8, :cond_1c7

    const v7, 0xc2db

    goto :goto_1be

    :sswitch_1d1
    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v5

    :sswitch_1d5
    invoke-static {v5}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v7

    const v2, 0xc2fa

    :goto_1dc
    const v8, 0xc30b

    xor-int/2addr v2, v8

    sparse-switch v2, :sswitch_data_a02

    goto :goto_1dc

    :sswitch_1e4
    if-eqz v7, :cond_1ea

    const v2, 0xc5e2

    goto :goto_1dc

    :cond_1ea
    :sswitch_1ea
    const v2, 0xc5c3

    goto :goto_1dc

    :sswitch_1ee
    invoke-static {v5}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/google/gson/JsonElement;

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v18, -0x1a81a65ba8deeL

    sget v7, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v0, v7

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    move-wide/from16 v0, v18

    invoke-static {v0, v1, v2}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v7

    const-wide v18, 0x1a82765ba8d7cL

    sget v8, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v8

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    move-wide/from16 v0, v18

    invoke-static {v0, v1, v2}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v7}, Lcom/github/catvod/spider/Sp360;->h(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v7

    const-wide v18, 0x1a82b65ba8ff5L  # 2.30422000187916E-309

    sget v8, Lcom/github/catvod/spider/a;->a:I

    int-to-long v0, v8

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v8

    invoke-static {v7, v8}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v7, v2}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v7}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v15, v2}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const v2, 0xc601

    :goto_240
    const v7, 0xc612

    xor-int/2addr v2, v7

    sparse-switch v2, :sswitch_data_a14

    goto :goto_240

    :sswitch_248
    const v2, 0xc620

    goto :goto_240

    :sswitch_24c
    const v2, 0xc67d

    :goto_24f
    const v5, 0xc68e

    xor-int/2addr v2, v5

    sparse-switch v2, :sswitch_data_a1e

    goto :goto_24f

    :sswitch_257
    invoke-static {v15}, Lcom/github/catvod/spider/a;->bv(Ljava/lang/Object;)I

    move-result v5

    const v2, 0xd505

    :goto_25e
    const v7, 0xd516

    xor-int/2addr v2, v7

    sparse-switch v2, :sswitch_data_a28

    goto :goto_25e

    :sswitch_266
    if-lez v5, :cond_41a

    const v2, 0xd562

    goto :goto_25e

    :sswitch_26c
    const v2, 0xc69c

    goto :goto_24f

    :sswitch_270
    const/4 v5, 0x0

    move v7, v2

    :sswitch_272
    const v2, 0xc984

    :goto_275
    const v8, 0xc995

    xor-int/2addr v2, v8

    sparse-switch v2, :sswitch_data_a3a

    goto :goto_275

    :sswitch_27d
    if-ge v5, v7, :cond_283

    const v2, 0xc9e1

    goto :goto_275

    :cond_283
    :sswitch_283
    const v2, 0xc9c2

    goto :goto_275

    :sswitch_287
    sget v2, Lcom/github/catvod/spider/c;->a:I

    xor-int/lit16 v2, v2, -0x290

    add-int/2addr v2, v5

    const v8, 0xca00

    :goto_28f
    const v17, 0xca11

    xor-int v8, v8, v17

    sparse-switch v8, :sswitch_data_a4c

    goto :goto_28f

    :cond_298
    :sswitch_298
    const v8, 0xca3e

    goto :goto_28f

    :sswitch_29c
    if-le v2, v7, :cond_298

    const v8, 0xca5d

    goto :goto_28f

    :sswitch_2a2
    const v8, 0xca7c

    :goto_2a5
    const v17, 0xca8d

    xor-int v8, v8, v17

    sparse-switch v8, :sswitch_data_a5e

    goto :goto_2a5

    :sswitch_2ae
    const v8, 0xcd26

    goto :goto_2a5

    :sswitch_2b2
    move v8, v7

    :goto_2b3
    sget v17, Lcom/github/catvod/spider/d;->a:I

    const-wide v18, 0x1a82d65ba8c19L

    sget v20, Lcom/github/catvod/spider/b;->a:I

    move/from16 v0, v20

    int-to-long v0, v0

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v18

    const/16 v19, 0x6

    move/from16 v0, v19

    new-array v0, v0, [Ljava/lang/Object;

    move-object/from16 v19, v0

    const/16 v20, 0x0

    const-wide v22, -0x1a85565ba8ce1L

    sget v21, Lcom/github/catvod/spider/d;->a:I

    move/from16 v0, v21

    int-to-long v0, v0

    move-wide/from16 v24, v0

    xor-long v22, v22, v24

    invoke-static/range {v22 .. v23}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v21

    aput-object v21, v19, v20

    const/16 v20, 0x1

    aput-object v9, v19, v20

    const/16 v20, 0x2

    aput-object v10, v19, v20

    const/16 v20, 0x3

    move/from16 v0, v17

    xor-int/lit16 v0, v0, 0x3da

    move/from16 v17, v0

    add-int v5, v5, v17

    invoke-static {v5}, Lcom/github/catvod/spider/a;->do(I)Ljava/lang/Integer;

    move-result-object v5

    aput-object v5, v19, v20

    const/4 v5, 0x4

    invoke-static {v8}, Lcom/github/catvod/spider/a;->do(I)Ljava/lang/Integer;

    move-result-object v8

    aput-object v8, v19, v5

    const/4 v5, 0x5

    aput-object v16, v19, v5

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/a;->dv(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    invoke-static/range {p0 .. p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v8

    invoke-static {v5, v8}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v8

    const-wide v18, 0x1a87a65ba8d7cL

    sget v5, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v5

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v8, v5}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v17

    const v5, 0xcd83

    :goto_332
    const v18, 0xcd94

    xor-int v5, v5, v18

    sparse-switch v5, :sswitch_data_a68

    goto :goto_332

    :sswitch_33b
    if-eqz v17, :cond_344

    const v5, 0xcde0

    goto :goto_332

    :sswitch_341
    move v8, v2

    goto/16 :goto_2b3

    :cond_344
    :sswitch_344
    const v5, 0xcdc1

    goto :goto_332

    :sswitch_348
    const v2, 0xcdff

    :goto_34b
    const v5, 0xce10

    xor-int/2addr v2, v5

    sparse-switch v2, :sswitch_data_a7a

    goto :goto_34b

    :sswitch_353
    const v2, 0xce1e

    goto :goto_34b

    :sswitch_357
    const-wide v18, -0x1a88065ba8ce1L

    sget v5, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v5

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v8, v5}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v5

    const-wide v18, 0x1a88565ba8ff5L

    sget v8, Lcom/github/catvod/spider/a;->a:I

    int-to-long v0, v8

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v8

    invoke-static {v5, v8}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v5

    move-object/from16 v0, v16

    invoke-static {v5, v0}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v8

    move v5, v2

    :sswitch_38a
    invoke-static {v8}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v17

    const v2, 0xd106

    :goto_391
    const v18, 0xd117

    xor-int v2, v2, v18

    sparse-switch v2, :sswitch_data_a84

    goto :goto_391

    :sswitch_39a
    if-eqz v17, :cond_3a0

    const v2, 0xd163

    goto :goto_391

    :cond_3a0
    :sswitch_3a0
    const v2, 0xd144

    goto :goto_391

    :sswitch_3a4
    invoke-static {v8}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/google/gson/JsonElement;

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v18, -0x1a89265ba8deeL

    sget v17, Lcom/github/catvod/spider/merge/q/w;->a:I

    move/from16 v0, v17

    int-to-long v0, v0

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    move-wide/from16 v0, v18

    invoke-static {v0, v1, v2}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v17

    const-wide v18, 0x1a89f65ba8c19L

    sget v20, Lcom/github/catvod/spider/b;->a:I

    move/from16 v0, v20

    int-to-long v0, v0

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    move-wide/from16 v0, v18

    invoke-static {v0, v1, v2}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static/range {v17 .. v17}, Lcom/github/catvod/spider/Sp360;->h(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v17

    const-wide v18, -0x1a8a365ba8deeL

    sget v20, Lcom/github/catvod/spider/merge/q/w;->a:I

    move/from16 v0, v20

    int-to-long v0, v0

    move-wide/from16 v20, v0

    xor-long v18, v18, v20

    invoke-static/range {v18 .. v19}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v18

    invoke-static/range {v17 .. v18}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-object/from16 v0, v17

    invoke-static {v0, v2}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static/range {v17 .. v17}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v15, v2}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const v2, 0xd182

    :goto_3fe
    const v17, 0xd193

    xor-int v2, v2, v17

    sparse-switch v2, :sswitch_data_a96

    goto :goto_3fe

    :sswitch_407
    const v2, 0xd1a1

    goto :goto_3fe

    :sswitch_40b
    const v2, 0xd1fe

    :goto_40e
    const v8, 0xd20f

    xor-int/2addr v2, v8

    sparse-switch v2, :sswitch_data_aa0

    goto :goto_40e

    :sswitch_416
    const v2, 0xd4a8

    goto :goto_40e

    :cond_41a
    :sswitch_41a
    const v2, 0xd543

    goto/16 :goto_25e

    :sswitch_41f
    move-object/from16 v0, v16

    invoke-static {v13, v0}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const-wide v16, -0x1a8a565ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2, v15}, Lcom/github/catvod/spider/merge/q/w;->ah(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v14, v2}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-object v2, v6

    :goto_43c
    :sswitch_43c
    sget v5, Lcom/github/catvod/spider/b;->a:I

    xor-int/lit16 v5, v5, -0x324

    add-int/2addr v4, v5

    const v5, 0xd581

    :goto_444
    const v6, 0xd592

    xor-int/2addr v5, v6

    sparse-switch v5, :sswitch_data_aaa

    goto :goto_444

    :sswitch_44c
    const v5, 0xd5a0

    goto :goto_444

    :sswitch_450
    const v2, 0xd888

    :goto_453
    const v4, 0xd899

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_ab4

    goto :goto_453

    :sswitch_45b
    const v2, 0xd8a7

    goto :goto_453

    :sswitch_45f
    const v2, 0xd904

    :goto_462
    const v4, 0xd915

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_abe

    goto :goto_462

    :sswitch_46a
    if-eqz v5, :cond_470

    const v2, 0xd961

    goto :goto_462

    :cond_470
    :sswitch_470
    const v2, 0xd942

    goto :goto_462

    :sswitch_474
    const/4 v2, 0x0

    move v4, v2

    :goto_476
    invoke-static {v11}, Lcom/github/catvod/spider/Sp360;->an(Ljava/lang/Object;)I

    move-result v5

    const v2, 0xd980

    :goto_47d
    const v6, 0xd991

    xor-int/2addr v2, v6

    sparse-switch v2, :sswitch_data_ad0

    goto :goto_47d

    :sswitch_485
    if-ge v4, v5, :cond_48b

    const v2, 0xdc68

    goto :goto_47d

    :cond_48b
    :sswitch_48b
    const v2, 0xdc49

    goto :goto_47d

    :sswitch_48f
    invoke-static {v11, v4}, Lcom/github/catvod/spider/Sp360;->g(Ljava/lang/Object;I)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    new-instance v6, Ljava/util/ArrayList;

    invoke-direct {v6}, Ljava/util/ArrayList;-><init>()V

    const-wide v16, -0x1a8a765ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v7

    const v2, 0xdc87

    :goto_4b3
    const v8, 0xdc98

    xor-int/2addr v2, v8

    sparse-switch v2, :sswitch_data_ae2

    goto :goto_4b3

    :sswitch_4bb
    if-eqz v7, :cond_4c1

    const v2, 0xdce4

    goto :goto_4b3

    :cond_4c1
    :sswitch_4c1
    const v2, 0xdcc5

    goto :goto_4b3

    :sswitch_4c5
    const-wide v16, 0x1a8ab65ba8ff5L

    sget v2, Lcom/github/catvod/spider/a;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->ai(Ljava/lang/Object;)Ljava/util/Set;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/d;->s(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v7

    :sswitch_4e1
    invoke-static {v7}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v8

    const v2, 0xdd03

    :goto_4e8
    const v12, 0xdd14

    xor-int/2addr v2, v12

    sparse-switch v2, :sswitch_data_af4

    goto :goto_4e8

    :sswitch_4f0
    if-eqz v8, :cond_4f6

    const v2, 0x170090

    goto :goto_4e8

    :cond_4f6
    :sswitch_4f6
    const v2, 0xdd41

    goto :goto_4e8

    :sswitch_4fa
    invoke-static {v7}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    const-wide v16, -0x1a8af65ba8ce1L

    sget v8, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v8

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v8

    const/4 v12, 0x5

    new-array v12, v12, [Ljava/lang/Object;

    const/4 v15, 0x0

    const-wide v16, 0x1a8cf65ba8c19L  # 2.30770007497146E-309

    sget v18, Lcom/github/catvod/spider/b;->a:I

    move/from16 v0, v18

    int-to-long v0, v0

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v16

    aput-object v16, v12, v15

    const/4 v15, 0x1

    aput-object v9, v12, v15

    const/4 v15, 0x2

    aput-object v10, v12, v15

    const/4 v15, 0x3

    aput-object v5, v12, v15

    const/4 v15, 0x4

    aput-object v2, v12, v15

    invoke-static {v8, v12}, Lcom/github/catvod/spider/a;->dv(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static/range {p0 .. p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v8

    invoke-static {v2, v8}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v8

    const-wide v16, -0x1a8f465ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v8, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v12

    const v2, 0x1700af

    :goto_55f
    const v15, 0x1700c0

    xor-int/2addr v2, v15

    sparse-switch v2, :sswitch_data_b06

    goto :goto_55f

    :cond_567
    :sswitch_567
    const v2, 0x1700ed

    goto :goto_55f

    :sswitch_56b
    if-eqz v12, :cond_567

    const v2, 0x17010c

    goto :goto_55f

    :sswitch_571
    const v2, 0x17012b

    :goto_574
    const v7, 0x17013c

    xor-int/2addr v2, v7

    sparse-switch v2, :sswitch_data_b18

    goto :goto_574

    :sswitch_57c
    const v2, 0x17014a

    goto :goto_574

    :sswitch_580
    const-wide v16, -0x1a8fa65ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v8, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v16, 0x1a8ff65ba8c19L

    sget v8, Lcom/github/catvod/spider/b;->a:I

    int-to-long v0, v8

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v8

    invoke-static {v2, v8}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v8

    :sswitch_5ac
    invoke-static {v8}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v12

    const v2, 0x1701a7

    :goto_5b3
    const v15, 0x1701b8

    xor-int/2addr v2, v15

    sparse-switch v2, :sswitch_data_b22

    goto :goto_5b3

    :sswitch_5bb
    if-eqz v12, :cond_5c1

    const v2, 0x17048f

    goto :goto_5b3

    :cond_5c1
    :sswitch_5c1
    const v2, 0x170470

    goto :goto_5b3

    :sswitch_5c5
    invoke-static {v8}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/google/gson/JsonElement;

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    new-instance v12, Ljava/lang/StringBuilder;

    invoke-direct {v12}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v16, -0x1a90e65ba8ce1L

    sget v15, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v15

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v15

    invoke-static {v2, v15}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v15

    invoke-static {v15}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v15

    invoke-static {v12, v15}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v16, -0x1a91565ba8deeL

    sget v15, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v0, v15

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v15

    invoke-static {v12, v15}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v16, 0x1a91765ba8d7cL

    sget v15, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v15

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v15

    invoke-static {v2, v15}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v15

    invoke-static {v15}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v15

    invoke-static {v12, v15}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v12}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v12

    const-wide v16, 0x1a91c65ba8ff5L

    sget v15, Lcom/github/catvod/spider/a;->a:I

    int-to-long v0, v15

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    move-wide/from16 v0, v16

    invoke-static {v0, v1, v2}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v12}, Lcom/github/catvod/spider/Sp360;->h(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v12

    const-wide v16, 0x1a92065ba8d7cL

    sget v15, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v15

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v15

    invoke-static {v12, v15}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v12, v2}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v12}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v6, v2}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const v2, 0x1704ae

    :goto_657
    const v12, 0x1704bf

    xor-int/2addr v2, v12

    sparse-switch v2, :sswitch_data_b34

    goto :goto_657

    :sswitch_65f
    const v2, 0x1704cd

    goto :goto_657

    :sswitch_663
    invoke-static {v6}, Lcom/github/catvod/spider/a;->bv(Ljava/lang/Object;)I

    move-result v7

    const v2, 0x17052a

    :goto_66a
    const v8, 0x17053b

    xor-int/2addr v2, v8

    sparse-switch v2, :sswitch_data_b3e

    goto :goto_66a

    :sswitch_672
    if-lez v7, :cond_678

    const v2, 0x170812

    goto :goto_66a

    :cond_678
    :sswitch_678
    const v2, 0x170568

    goto :goto_66a

    :sswitch_67c
    invoke-static {v13, v5}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const-wide v16, -0x1a92265ba8ce1L

    sget v2, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2, v6}, Lcom/github/catvod/spider/merge/q/w;->ah(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v14, v2}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const v2, 0x170831

    :goto_699
    const v5, 0x170842

    xor-int/2addr v2, v5

    sparse-switch v2, :sswitch_data_b50

    goto :goto_699

    :sswitch_6a1
    sget v2, Lcom/github/catvod/spider/a;->a:I

    xor-int/lit16 v2, v2, -0xd0

    add-int/2addr v2, v4

    const v4, 0x1708ad

    :goto_6a9
    const v5, 0x1708be

    xor-int/2addr v4, v5

    sparse-switch v4, :sswitch_data_b5a

    goto :goto_6a9

    :sswitch_6b1
    const v4, 0x1708cc

    goto :goto_6a9

    :sswitch_6b5
    const v2, 0x170850

    goto :goto_699

    :sswitch_6b9
    move v4, v2

    goto/16 :goto_476

    :sswitch_6bc
    const v2, 0x170929

    :goto_6bf
    const v4, 0x17093a

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_b64

    goto :goto_6bf

    :sswitch_6c7
    const v2, 0x170bd3

    goto :goto_6bf

    :sswitch_6cb
    const v2, 0x170c30

    :goto_6ce
    const v4, 0x170c41

    xor-int/2addr v2, v4

    sparse-switch v2, :sswitch_data_b6e

    goto :goto_6ce

    :cond_6d6
    :sswitch_6d6
    const v2, 0x170c6e

    goto :goto_6ce

    :sswitch_6da
    if-eqz v6, :cond_6d6

    const v2, 0x170c8d

    goto :goto_6ce

    :sswitch_6e0
    const-wide v4, 0x1a92465ba8ff5L

    sget v2, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v2

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const/4 v4, 0x0

    :sswitch_6f2
    invoke-static {v11}, Lcom/github/catvod/spider/Sp360;->an(Ljava/lang/Object;)I

    move-result v6

    const v5, 0x170cac

    :goto_6f9
    const v7, 0x170cbd

    xor-int/2addr v5, v7

    sparse-switch v5, :sswitch_data_b80

    goto :goto_6f9

    :sswitch_701
    if-ge v4, v6, :cond_707

    const v5, 0x170f94

    goto :goto_6f9

    :cond_707
    :sswitch_707
    const v5, 0x170cea

    goto :goto_6f9

    :sswitch_70b
    new-instance v7, Ljava/util/ArrayList;

    invoke-direct {v7}, Ljava/util/ArrayList;-><init>()V

    invoke-static {v11, v4}, Lcom/github/catvod/spider/Sp360;->g(Ljava/lang/Object;I)Lcom/google/gson/JsonElement;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v8

    invoke-static {v2, v8}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v5

    const v6, 0x170fb3

    :goto_71f
    const v12, 0x170fc4

    xor-int/2addr v6, v12

    sparse-switch v6, :sswitch_data_b92

    goto :goto_71f

    :cond_727
    :sswitch_727
    const v6, 0x170ff1

    goto :goto_71f

    :sswitch_72b
    if-eqz v5, :cond_727

    const v6, 0x171010

    goto :goto_71f

    :sswitch_731
    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->al(Ljava/lang/Object;)I

    move-result v12

    const v6, 0x17102f

    :goto_738
    const v15, 0x171040

    xor-int/2addr v6, v15

    sparse-switch v6, :sswitch_data_ba4

    goto :goto_738

    :cond_740
    :sswitch_740
    const v6, 0x17106d

    goto :goto_738

    :sswitch_744
    if-nez v12, :cond_740

    const v6, 0x17108c

    goto :goto_738

    :sswitch_74a
    const v5, 0x1710ab

    :goto_74d
    const v6, 0x1710bc

    xor-int/2addr v5, v6

    sparse-switch v5, :sswitch_data_bb6

    goto :goto_74d

    :sswitch_755
    const v5, 0x171355

    goto :goto_74d

    :sswitch_759
    const v6, 0x1713b2

    :goto_75c
    const v12, 0x1713c3

    xor-int/2addr v6, v12

    sparse-switch v6, :sswitch_data_bc0

    goto :goto_75c

    :goto_764
    :sswitch_764
    const-wide v16, -0x1a94f65ba8ce1L

    sget v6, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v6

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v6

    invoke-static {v6}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v6

    invoke-static {v6}, Lcom/github/catvod/spider/merge/q/w;->cc(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v6

    const-wide v16, 0x1a95765ba8ff5L

    sget v12, Lcom/github/catvod/spider/a;->a:I

    int-to-long v0, v12

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    move-wide/from16 v0, v16

    invoke-static {v0, v1, v5}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    invoke-static {v6}, Lcom/github/catvod/spider/Sp360;->h(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v6

    const-wide v16, -0x1a96365ba8ce1L

    sget v12, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v12

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v12

    invoke-static {v6, v12}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v6, v5}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v6}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    invoke-static {v7, v5}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    invoke-static {v7}, Lcom/github/catvod/spider/a;->bv(Ljava/lang/Object;)I

    move-result v6

    const v5, 0x1717b1

    :goto_7ba
    const v12, 0x1717c2

    xor-int/2addr v5, v12

    sparse-switch v5, :sswitch_data_bca

    goto :goto_7ba

    :cond_7c2
    :sswitch_7c2
    const v5, 0x1717ef

    goto :goto_7ba

    :sswitch_7c6
    const v6, 0x1713d1

    goto :goto_75c

    :sswitch_7ca
    move-object/from16 v0, p0

    invoke-static {v0, v9, v10, v8}, Lcom/github/catvod/spider/Sp360;->am(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v6

    const-wide v16, 0x1a93465ba8d7cL

    sget v5, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v5

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v6, v5}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v5

    invoke-static {v5}, Lcom/github/catvod/spider/Sp360;->au(Ljava/lang/Object;)I

    move-result v12

    const v5, 0x17142e

    :goto_7eb
    const v15, 0x17143f

    xor-int/2addr v5, v15

    sparse-switch v5, :sswitch_data_bdc

    goto :goto_7eb

    :sswitch_7f3
    if-eqz v12, :cond_7f9

    const v5, 0x171716

    goto :goto_7eb

    :cond_7f9
    :sswitch_7f9
    const v5, 0x17146c

    goto :goto_7eb

    :sswitch_7fd
    const v5, 0x171735

    :goto_800
    const v6, 0x171746

    xor-int/2addr v5, v6

    sparse-switch v5, :sswitch_data_bee

    goto :goto_800

    :goto_808
    :sswitch_808
    sget v5, Lcom/github/catvod/spider/b;->a:I

    xor-int/lit16 v5, v5, -0x324

    add-int/2addr v4, v5

    const v5, 0x17182d

    :goto_810
    const v6, 0x17183e

    xor-int/2addr v5, v6

    sparse-switch v5, :sswitch_data_bf8

    goto :goto_810

    :sswitch_818
    const v5, 0x171ad7

    goto :goto_810

    :sswitch_81c
    const v5, 0x171754

    goto :goto_800

    :sswitch_820
    const-wide v16, -0x1a93a65ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v0, v2

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v6, v2}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const-wide v16, -0x1a93f65ba8ce1L

    sget v5, Lcom/github/catvod/spider/d;->a:I

    int-to-long v0, v5

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v2, v5}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    invoke-static {v2, v8}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v5

    goto/16 :goto_764

    :sswitch_84e
    if-lez v6, :cond_7c2

    const v5, 0x17180e

    goto/16 :goto_7ba

    :sswitch_855
    invoke-static {v13, v8}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const-wide v16, 0x1a96565ba8d7cL

    sget v5, Lcom/github/catvod/spider/c;->a:I

    int-to-long v0, v5

    move-wide/from16 v18, v0

    xor-long v16, v16, v18

    invoke-static/range {v16 .. v17}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v5

    invoke-static {v5, v7}, Lcom/github/catvod/spider/merge/q/w;->ah(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    invoke-static {v14, v5}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    goto :goto_808

    :sswitch_870
    new-instance v4, Lcom/github/catvod/spider/merge/ck/d;

    invoke-direct {v4}, Lcom/github/catvod/spider/merge/ck/d;-><init>()V

    const/4 v2, 0x0

    move-object/from16 v0, p1

    invoke-static {v0, v2}, Lcom/github/catvod/spider/a;->el(Ljava/lang/Object;I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->n(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, -0x1a96765ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->aa(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, -0x1a96d65ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->aw(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, 0x1a97665ba8ff5L

    sget v2, Lcom/github/catvod/spider/a;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    move-object/from16 v0, p0

    invoke-static {v0, v2}, Lcom/github/catvod/spider/Sp360;->p(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->at(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, -0x1a98465ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->av(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, -0x1a98c65ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    move-object/from16 v0, p0

    invoke-static {v0, v2}, Lcom/github/catvod/spider/Sp360;->p(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->o(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, -0x1a99165ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->z(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, 0x1a99265ba8ff5L

    sget v2, Lcom/github/catvod/spider/a;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    move-object/from16 v0, p0

    invoke-static {v0, v2}, Lcom/github/catvod/spider/Sp360;->p(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->k(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, -0x1a99865ba8deeL

    sget v2, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v2

    move-object/from16 v0, p0

    invoke-static {v0, v2}, Lcom/github/catvod/spider/Sp360;->p(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->q(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v6, 0x1a9a165ba8c19L

    sget v2, Lcom/github/catvod/spider/b;->a:I

    int-to-long v8, v2

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v3, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->f(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v2, 0x1a9ad65ba8c19L

    sget v5, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v5

    xor-long/2addr v2, v6

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2, v13}, Lcom/github/catvod/spider/merge/q/w;->ah(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->w(Ljava/lang/Object;Ljava/lang/Object;)V

    const-wide v2, -0x1a9b165ba8deeL

    sget v5, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v6, v5

    xor-long/2addr v2, v6

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v2, v14}, Lcom/github/catvod/spider/merge/q/w;->ah(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-static {v4, v2}, Lcom/github/catvod/spider/Sp360;->ab(Ljava/lang/Object;Ljava/lang/Object;)V

    invoke-static {v4}, Lcom/github/catvod/spider/Sp360;->m(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    return-object v2

    :sswitch_986
    move-object v2, v6

    goto/16 :goto_43c

    :sswitch_989
    move-object v6, v2

    goto/16 :goto_1ad

    :sswitch_data_98c
    .sparse-switch
        0xe -> :sswitch_ce
        0x31 -> :sswitch_d1
        0xcc -> :sswitch_d6
        0xef -> :sswitch_45f
    .end sparse-switch

    :sswitch_data_99e
    .sparse-switch
        0x11 -> :sswitch_f4
        0x36 -> :sswitch_f9
        0x1d7 -> :sswitch_450
        0x1f4 -> :sswitch_fc
    .end sparse-switch

    :sswitch_data_9b0
    .sparse-switch
        0x11 -> :sswitch_117
        0xb918 -> :sswitch_13a
        0xb939 -> :sswitch_121
        0xb97b -> :sswitch_11d
    .end sparse-switch

    :sswitch_data_9c2
    .sparse-switch
        0xe -> :sswitch_130
        0x2d -> :sswitch_989
        0x4c -> :sswitch_13a
        0xef -> :sswitch_134
    .end sparse-switch

    :sswitch_data_9d4
    .sparse-switch
        0x16 -> :sswitch_165
        0x35 -> :sswitch_17e
        0x1f7 -> :sswitch_169
        0x7eef -> :sswitch_16f
    .end sparse-switch

    :sswitch_data_9e6
    .sparse-switch
        0x11 -> :sswitch_17a
        0x32 -> :sswitch_43c
    .end sparse-switch

    :sswitch_data_9f0
    .sparse-switch
        0x12 -> :sswitch_1c7
        0x33 -> :sswitch_270
        0x54 -> :sswitch_1d1
        0xf1 -> :sswitch_1cb
    .end sparse-switch

    :sswitch_data_a02
    .sparse-switch
        0x1f1 -> :sswitch_1e4
        0x6af -> :sswitch_1ea
        0x6c8 -> :sswitch_24c
        0x6e9 -> :sswitch_1ee
    .end sparse-switch

    :sswitch_data_a14
    .sparse-switch
        0x13 -> :sswitch_248
        0x32 -> :sswitch_1d5
    .end sparse-switch

    :sswitch_data_a1e
    .sparse-switch
        0x12 -> :sswitch_257
        0xf3 -> :sswitch_26c
    .end sparse-switch

    :sswitch_data_a28
    .sparse-switch
        0x13 -> :sswitch_266
        0x32 -> :sswitch_41a
        0x55 -> :sswitch_986
        0x74 -> :sswitch_41f
    .end sparse-switch

    :sswitch_data_a3a
    .sparse-switch
        0x11 -> :sswitch_27d
        0x36 -> :sswitch_283
        0x57 -> :sswitch_257
        0x74 -> :sswitch_287
    .end sparse-switch

    :sswitch_data_a4c
    .sparse-switch
        0xe -> :sswitch_298
        0x11 -> :sswitch_29c
        0x2f -> :sswitch_341
        0x4c -> :sswitch_2a2
    .end sparse-switch

    :sswitch_data_a5e
    .sparse-switch
        0xf1 -> :sswitch_2ae
        0x7ab -> :sswitch_2b2
    .end sparse-switch

    :sswitch_data_a68
    .sparse-switch
        0x17 -> :sswitch_33b
        0x36 -> :sswitch_344
        0x55 -> :sswitch_357
        0x74 -> :sswitch_348
    .end sparse-switch

    :sswitch_data_a7a
    .sparse-switch
        0xe -> :sswitch_257
        0x3ef -> :sswitch_353
    .end sparse-switch

    :sswitch_data_a84
    .sparse-switch
        0x11 -> :sswitch_39a
        0x32 -> :sswitch_3a0
        0x53 -> :sswitch_40b
        0x74 -> :sswitch_3a4
    .end sparse-switch

    :sswitch_data_a96
    .sparse-switch
        0x11 -> :sswitch_407
        0x32 -> :sswitch_38a
    .end sparse-switch

    :sswitch_data_aa0
    .sparse-switch
        0x3f1 -> :sswitch_416
        0x6a7 -> :sswitch_272
    .end sparse-switch

    :sswitch_data_aaa
    .sparse-switch
        0x13 -> :sswitch_44c
        0x32 -> :sswitch_e8
    .end sparse-switch

    :sswitch_data_ab4
    .sparse-switch
        0x11 -> :sswitch_45b
        0x3e -> :sswitch_870
    .end sparse-switch

    :sswitch_data_abe
    .sparse-switch
        0x11 -> :sswitch_46a
        0x36 -> :sswitch_470
        0x57 -> :sswitch_6cb
        0x74 -> :sswitch_474
    .end sparse-switch

    :sswitch_data_ad0
    .sparse-switch
        0x11 -> :sswitch_485
        0x5bb -> :sswitch_48b
        0x5d8 -> :sswitch_6bc
        0x5f9 -> :sswitch_48f
    .end sparse-switch

    :sswitch_data_ae2
    .sparse-switch
        0x1f -> :sswitch_4bb
        0x3e -> :sswitch_4c1
        0x5d -> :sswitch_6a1
        0x7c -> :sswitch_4c5
    .end sparse-switch

    :sswitch_data_af4
    .sparse-switch
        0x17 -> :sswitch_4f0
        0x36 -> :sswitch_4f6
        0x55 -> :sswitch_663
        0x17dd84 -> :sswitch_4fa
    .end sparse-switch

    :sswitch_data_b06
    .sparse-switch
        0xe -> :sswitch_567
        0x2d -> :sswitch_580
        0x6f -> :sswitch_56b
        0x1cc -> :sswitch_571
    .end sparse-switch

    :sswitch_data_b18
    .sparse-switch
        0x17 -> :sswitch_57c
        0x76 -> :sswitch_663
    .end sparse-switch

    :sswitch_data_b22
    .sparse-switch
        0x1f -> :sswitch_5bb
        0x537 -> :sswitch_5c5
        0x5c8 -> :sswitch_4e1
        0x5e9 -> :sswitch_5c1
    .end sparse-switch

    :sswitch_data_b34
    .sparse-switch
        0x11 -> :sswitch_65f
        0x72 -> :sswitch_5ac
    .end sparse-switch

    :sswitch_data_b3e
    .sparse-switch
        0x11 -> :sswitch_672
        0x53 -> :sswitch_6a1
        0x72 -> :sswitch_678
        0xd29 -> :sswitch_67c
    .end sparse-switch

    :sswitch_data_b50
    .sparse-switch
        0x12 -> :sswitch_6a1
        0x73 -> :sswitch_6b5
    .end sparse-switch

    :sswitch_data_b5a
    .sparse-switch
        0x13 -> :sswitch_6b1
        0x72 -> :sswitch_6b9
    .end sparse-switch

    :sswitch_data_b64
    .sparse-switch
        0x13 -> :sswitch_6c7
        0x2e9 -> :sswitch_870
    .end sparse-switch

    :sswitch_data_b6e
    .sparse-switch
        0xe -> :sswitch_6d6
        0x2f -> :sswitch_870
        0x71 -> :sswitch_6da
        0xcc -> :sswitch_6e0
    .end sparse-switch

    :sswitch_data_b80
    .sparse-switch
        0x11 -> :sswitch_701
        0x57 -> :sswitch_870
        0x76 -> :sswitch_707
        0x329 -> :sswitch_70b
    .end sparse-switch

    :sswitch_data_b92
    .sparse-switch
        0x16 -> :sswitch_727
        0x35 -> :sswitch_7ca
        0x77 -> :sswitch_72b
        0x1fd4 -> :sswitch_731
    .end sparse-switch

    :sswitch_data_ba4
    .sparse-switch
        0xe -> :sswitch_740
        0x2d -> :sswitch_759
        0x6f -> :sswitch_744
        0xcc -> :sswitch_74a
    .end sparse-switch

    :sswitch_data_bb6
    .sparse-switch
        0x17 -> :sswitch_755
        0x3e9 -> :sswitch_7ca
    .end sparse-switch

    :sswitch_data_bc0
    .sparse-switch
        0x12 -> :sswitch_764
        0x71 -> :sswitch_7c6
    .end sparse-switch

    :sswitch_data_bca
    .sparse-switch
        0x12 -> :sswitch_7c2
        0x2d -> :sswitch_808
        0x73 -> :sswitch_84e
        0xfcc -> :sswitch_855
    .end sparse-switch

    :sswitch_data_bdc
    .sparse-switch
        0x11 -> :sswitch_7f3
        0x53 -> :sswitch_820
        0x72 -> :sswitch_7f9
        0x329 -> :sswitch_7fd
    .end sparse-switch

    :sswitch_data_bee
    .sparse-switch
        0x12 -> :sswitch_808
        0x73 -> :sswitch_81c
    .end sparse-switch

    :sswitch_data_bf8
    .sparse-switch
        0x13 -> :sswitch_818
        0x2e9 -> :sswitch_6f2
    .end sparse-switch
.end method

.method public homeContent(Z)Ljava/lang/String;
    .registers 14

    const/4 v1, 0x0

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->ar(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v2

    const/16 v0, 0x650

    :goto_7
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_206

    goto :goto_7

    :cond_d
    :sswitch_d
    const/16 v0, 0x68e

    goto :goto_7

    :sswitch_10
    if-eqz v2, :cond_d

    const/16 v0, 0x6ad

    goto :goto_7

    :sswitch_15
    const-wide v4, 0x1a5b565ba8d7cL

    sget v0, Lcom/github/catvod/spider/c;->a:I

    int-to-long v6, v0

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v2

    const/16 v0, 0x6cc

    :goto_28
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_218

    goto :goto_28

    :sswitch_2e
    if-eqz v2, :cond_33

    const/16 v0, 0x729

    goto :goto_28

    :cond_33
    :sswitch_33
    const/16 v0, 0x70a

    goto :goto_28

    :sswitch_36
    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->ar(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    const-wide v2, -0x1a5bc65ba8deeL

    sget v4, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v0, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v2

    const/16 v0, 0x748

    :goto_4d
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_22a

    goto :goto_4d

    :sswitch_53
    if-eqz v2, :cond_59

    const v0, 0xbe60

    goto :goto_4d

    :cond_59
    :sswitch_59
    const v0, 0xbe41

    goto :goto_4d

    :sswitch_5d
    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->ar(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    const-wide v2, 0x1a5c365ba8c19L

    sget v4, Lcom/github/catvod/spider/b;->a:I

    int-to-long v4, v4

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v2

    invoke-static {v0, v2}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v0

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/github/catvod/spider/Sp360;->ba:Ljava/lang/String;

    :sswitch_7c
    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    new-instance v0, Lcom/github/catvod/spider/merge/ck/j;

    const-wide v4, -0x1a5ca65ba8deeL

    sget v3, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const-wide v4, 0x1a5cc65ba8ff5L

    sget v6, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-direct {v0, v3, v4, v1}, Lcom/github/catvod/spider/merge/ck/j;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-static {v2, v0}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    new-instance v0, Lcom/github/catvod/spider/merge/ck/j;

    const-wide v4, -0x1a5cf65ba8ce1L

    sget v3, Lcom/github/catvod/spider/d;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const-wide v4, -0x1a5d165ba8ce1L

    sget v6, Lcom/github/catvod/spider/d;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-direct {v0, v3, v4, v1}, Lcom/github/catvod/spider/merge/ck/j;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-static {v2, v0}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    new-instance v0, Lcom/github/catvod/spider/merge/ck/j;

    const-wide v4, -0x1a5d565ba8ce1L

    sget v3, Lcom/github/catvod/spider/d;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const-wide v4, 0x1a5d765ba8ff5L

    sget v6, Lcom/github/catvod/spider/a;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-direct {v0, v3, v4, v1}, Lcom/github/catvod/spider/merge/ck/j;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-static {v2, v0}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    new-instance v0, Lcom/github/catvod/spider/merge/ck/j;

    const-wide v4, 0x1a5da65ba8c19L

    sget v3, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v3

    const-wide v4, -0x1a5dc65ba8deeL

    sget v6, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-direct {v0, v3, v4, v1}, Lcom/github/catvod/spider/merge/ck/j;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-static {v2, v0}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    new-instance v3, Ljava/util/ArrayList;

    invoke-direct {v3}, Ljava/util/ArrayList;-><init>()V

    const-wide v4, 0x1a5df65ba8c19L

    sget v0, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v0

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v4

    invoke-static {v0, v4}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    const-wide v4, -0x1a60865ba8ce1L

    sget v6, Lcom/github/catvod/spider/d;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v0, v4}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v0

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v4

    :sswitch_13c
    invoke-static {v4}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v5

    const v0, 0xbe7f

    :goto_143
    const v6, 0xbe90

    xor-int/2addr v0, v6

    sparse-switch v0, :sswitch_data_23c

    goto :goto_143

    :cond_14b
    :sswitch_14b
    const v0, 0xbebd

    goto :goto_143

    :sswitch_14f
    if-eqz v5, :cond_14b

    const v0, 0xbedc

    goto :goto_143

    :sswitch_155
    invoke-static {v4}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/google/gson/JsonElement;

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v6, -0x1a60d65ba8ce1L

    sget v8, Lcom/github/catvod/spider/d;->a:I

    int-to-long v8, v8

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v6

    invoke-static {v0, v6}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v6

    invoke-static {v6}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v6, 0x1a61165ba8c19L

    sget v8, Lcom/github/catvod/spider/b;->a:I

    int-to-long v8, v8

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v6, 0x1a61365ba8d7cL

    sget v8, Lcom/github/catvod/spider/c;->a:I

    int-to-long v8, v8

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v6

    invoke-static {v0, v6}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v6

    invoke-static {v6}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v6

    invoke-static {v5, v6}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v5}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    const-wide v6, 0x1a61a65ba8c19L

    sget v8, Lcom/github/catvod/spider/b;->a:I

    int-to-long v8, v8

    xor-long/2addr v6, v8

    invoke-static {v6, v7, v0}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v6

    const-wide v8, 0x1a62065ba8ff5L

    sget v7, Lcom/github/catvod/spider/a;->a:I

    int-to-long v10, v7

    xor-long/2addr v8, v10

    invoke-static {v8, v9, v0}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v7

    const-wide v8, -0x1a62665ba8deeL

    sget v10, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v10, v10

    xor-long/2addr v8, v10

    invoke-static {v8, v9, v0}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v6, v7, v0, v3}, Lcom/github/catvod/spider/Sp360;->r(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)V

    const v0, 0xbefb

    :goto_1d5
    const v5, 0xbf0c

    xor-int/2addr v0, v5

    sparse-switch v0, :sswitch_data_24e

    goto :goto_1d5

    :sswitch_1dd
    const v0, 0xbf1a

    goto :goto_1d5

    :sswitch_1e1
    const v0, 0xc202

    :goto_1e4
    const v4, 0xc213

    xor-int/2addr v0, v4

    sparse-switch v0, :sswitch_data_258

    goto :goto_1e4

    :sswitch_1ec
    if-eqz p1, :cond_1f2

    const v0, 0xc25f

    goto :goto_1e4

    :cond_1f2
    :sswitch_1f2
    const v0, 0xc240

    goto :goto_1e4

    :sswitch_1f6
    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->v(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    :goto_1fe
    invoke-static {v2, v3, v0}, Lcom/github/catvod/spider/Sp360;->aj(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    return-object v0

    :sswitch_203
    move-object v0, v1

    goto :goto_1fe

    nop

    :sswitch_data_206
    .sparse-switch
        0xe -> :sswitch_d
        0x31 -> :sswitch_10
        0xcc -> :sswitch_15
        0xef -> :sswitch_7c
    .end sparse-switch

    :sswitch_data_218
    .sparse-switch
        0x11 -> :sswitch_2e
        0x36 -> :sswitch_33
        0x1d7 -> :sswitch_7c
        0x1f4 -> :sswitch_36
    .end sparse-switch

    :sswitch_data_22a
    .sparse-switch
        0x11 -> :sswitch_53
        0xb918 -> :sswitch_7c
        0xb939 -> :sswitch_5d
        0xb97b -> :sswitch_59
    .end sparse-switch

    :sswitch_data_23c
    .sparse-switch
        0xe -> :sswitch_14b
        0x2d -> :sswitch_1e1
        0x4c -> :sswitch_155
        0xef -> :sswitch_14f
    .end sparse-switch

    :sswitch_data_24e
    .sparse-switch
        0x16 -> :sswitch_13c
        0x1f7 -> :sswitch_1dd
    .end sparse-switch

    :sswitch_data_258
    .sparse-switch
        0x11 -> :sswitch_1ec
        0x32 -> :sswitch_1f2
        0x4c -> :sswitch_1f6
        0x53 -> :sswitch_203
    .end sparse-switch
.end method

.method public init(Landroid/content/Context;Ljava/lang/String;)V
    .registers 5

    invoke-static {p2}, Lcom/github/catvod/spider/d;->at(Ljava/lang/Object;)Z

    move-result v1

    const/16 v0, 0x650

    :goto_6
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_1c

    goto :goto_6

    :cond_c
    :sswitch_c
    const/16 v0, 0x68e

    goto :goto_6

    :sswitch_f
    if-nez v1, :cond_c

    const/16 v0, 0x6ad

    goto :goto_6

    :sswitch_14
    invoke-static {p2}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    iput-object v0, p0, Lcom/github/catvod/spider/Sp360;->bb:Lcom/google/gson/JsonObject;

    :sswitch_1a
    return-void

    nop

    :sswitch_data_1c
    .sparse-switch
        0xe -> :sswitch_c
        0x31 -> :sswitch_f
        0xcc -> :sswitch_14
        0xef -> :sswitch_1a
    .end sparse-switch
.end method

.method public playerContent(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)Ljava/lang/String;
    .registers 12
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/List",
            "<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/lang/String;"
        }
    .end annotation

    const/4 v1, 0x1

    const/4 v2, 0x0

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->ar(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v3

    const/16 v0, 0x650

    :goto_8
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_122

    goto :goto_8

    :cond_e
    :sswitch_e
    const/16 v0, 0x68e

    goto :goto_8

    :sswitch_11
    if-eqz v3, :cond_e

    const/16 v0, 0x6ad

    goto :goto_8

    :sswitch_16
    const-wide v4, -0x1aaa265ba8deeL

    sget v0, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v6, v0

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v3, v0}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    const/16 v0, 0x6cc

    :goto_29
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_134

    goto :goto_29

    :sswitch_2f
    if-eqz v3, :cond_34

    const/16 v0, 0x729

    goto :goto_29

    :cond_34
    :sswitch_34
    const/16 v0, 0x70a

    goto :goto_29

    :sswitch_37
    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->ar(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    const-wide v4, 0x1aaa865ba8c19L

    sget v3, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v3

    xor-long/2addr v4, v6

    invoke-static {v4, v5, v0}, Lcom/github/catvod/spider/Sp360;->aq(JLjava/lang/Object;)Z

    move-result v3

    const/16 v0, 0x748

    :goto_4a
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_146

    goto :goto_4a

    :sswitch_50
    if-eqz v3, :cond_56

    const v0, 0xbe60

    goto :goto_4a

    :cond_56
    :sswitch_56
    const v0, 0xbe41

    goto :goto_4a

    :sswitch_5a
    const v0, 0xbe7f

    :goto_5d
    const v3, 0xbe90

    xor-int/2addr v0, v3

    sparse-switch v0, :sswitch_data_158

    goto :goto_5d

    :sswitch_65
    move v0, v1

    :goto_66
    invoke-static {}, Lcom/github/catvod/spider/Sp360;->j()Lcom/github/catvod/spider/merge/ac/a;

    move-result-object v3

    invoke-static {v3}, Lcom/github/catvod/spider/Sp360;->ay(Ljava/lang/Object;)Z

    move-result v4

    const v3, 0xbefb

    :goto_71
    const v5, 0xbf0c

    xor-int/2addr v3, v5

    sparse-switch v3, :sswitch_data_162

    goto :goto_71

    :cond_79
    :sswitch_79
    const v3, 0xbf39

    goto :goto_71

    :sswitch_7d
    const v0, 0xbe9e

    goto :goto_5d

    :sswitch_81
    move v0, v2

    goto :goto_66

    :sswitch_83
    if-eqz v4, :cond_79

    const v3, 0xc1e3

    goto :goto_71

    :sswitch_89
    const v3, 0xc202

    :goto_8c
    const v4, 0xc213

    xor-int/2addr v3, v4

    sparse-switch v3, :sswitch_data_174

    goto :goto_8c

    :sswitch_94
    if-eqz v0, :cond_9a

    const v3, 0xc25f

    goto :goto_8c

    :cond_9a
    :sswitch_9a
    const v3, 0xc240

    goto :goto_8c

    :sswitch_9e
    const v0, 0xc27e

    :goto_a1
    const v2, 0xc28f

    xor-int/2addr v0, v2

    sparse-switch v0, :sswitch_data_186

    goto :goto_a1

    :goto_a9
    :sswitch_a9
    const v0, 0xc2fa

    :goto_ac
    const v2, 0xc30b

    xor-int/2addr v0, v2

    sparse-switch v0, :sswitch_data_190

    goto :goto_ac

    :sswitch_b4
    if-nez v1, :cond_c0

    const v0, 0xc5e2

    goto :goto_ac

    :sswitch_ba
    const v0, 0xc29d

    goto :goto_a1

    :sswitch_be
    move v1, v2

    goto :goto_a9

    :cond_c0
    :sswitch_c0
    const v0, 0xc5c3

    goto :goto_ac

    :sswitch_c4
    new-instance v0, Lcom/github/catvod/spider/merge/ck/g;

    invoke-direct {v0}, Lcom/github/catvod/spider/merge/ck/g;-><init>()V

    invoke-static {v0, p2}, Lcom/github/catvod/spider/Sp360;->t(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->u(Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->af(Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ae(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->ap(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    :goto_dd
    return-object v0

    :sswitch_de
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-static {}, Lcom/github/catvod/spider/a;->er()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v2, 0x1aaae65ba8ff5L

    sget v1, Lcom/github/catvod/spider/a;->a:I

    int-to-long v4, v1

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {p2}, Lcom/github/catvod/spider/c;->r(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v0}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    new-instance v1, Lcom/github/catvod/spider/merge/ck/g;

    invoke-direct {v1}, Lcom/github/catvod/spider/merge/ck/g;-><init>()V

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->ad(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v1, p2}, Lcom/github/catvod/spider/Sp360;->t(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v1}, Lcom/github/catvod/spider/Sp360;->u(Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v1}, Lcom/github/catvod/spider/Sp360;->af(Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->ae(Ljava/lang/Object;Ljava/lang/Object;)Lcom/github/catvod/spider/merge/ck/g;

    invoke-static {v1}, Lcom/github/catvod/spider/Sp360;->ap(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    goto :goto_dd

    :sswitch_data_122
    .sparse-switch
        0xe -> :sswitch_e
        0x31 -> :sswitch_11
        0xcc -> :sswitch_16
        0xef -> :sswitch_81
    .end sparse-switch

    :sswitch_data_134
    .sparse-switch
        0x11 -> :sswitch_2f
        0x36 -> :sswitch_34
        0x1d7 -> :sswitch_81
        0x1f4 -> :sswitch_37
    .end sparse-switch

    :sswitch_data_146
    .sparse-switch
        0x11 -> :sswitch_50
        0xb918 -> :sswitch_81
        0xb939 -> :sswitch_5a
        0xb97b -> :sswitch_56
    .end sparse-switch

    :sswitch_data_158
    .sparse-switch
        0xe -> :sswitch_65
        0xef -> :sswitch_7d
    .end sparse-switch

    :sswitch_data_162
    .sparse-switch
        0x16 -> :sswitch_79
        0x35 -> :sswitch_be
        0x1f7 -> :sswitch_83
        0x7eef -> :sswitch_89
    .end sparse-switch

    :sswitch_data_174
    .sparse-switch
        0x11 -> :sswitch_94
        0x32 -> :sswitch_9a
        0x4c -> :sswitch_9e
        0x53 -> :sswitch_be
    .end sparse-switch

    :sswitch_data_186
    .sparse-switch
        0x12 -> :sswitch_a9
        0xf1 -> :sswitch_ba
    .end sparse-switch

    :sswitch_data_190
    .sparse-switch
        0x1f1 -> :sswitch_b4
        0x6af -> :sswitch_c0
        0x6c8 -> :sswitch_de
        0x6e9 -> :sswitch_c4
    .end sparse-switch
.end method

.method public searchContent(Ljava/lang/String;Z)Ljava/lang/String;
    .registers 15

    const-wide v0, 0x1a9f465ba8c19L

    sget v2, Lcom/github/catvod/spider/b;->a:I

    int-to-long v2, v2

    xor-long/2addr v0, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x1

    new-array v1, v1, [Ljava/lang/Object;

    const/4 v2, 0x0

    aput-object p1, v1, v2

    invoke-static {v0, v1}, Lcom/github/catvod/spider/a;->dv(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {p0}, Lcom/github/catvod/spider/Sp360;->e(Ljava/lang/Object;)Ljava/util/HashMap;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->b(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->as(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    const-wide v2, 0x1aa4265ba8ff5L

    sget v1, Lcom/github/catvod/spider/a;->a:I

    int-to-long v4, v1

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v0

    const-wide v2, -0x1aa4765ba8ce1L

    sget v1, Lcom/github/catvod/spider/d;->a:I

    int-to-long v4, v1

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->i(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v1

    const-wide v2, -0x1aa5065ba8ce1L

    sget v0, Lcom/github/catvod/spider/d;->a:I

    int-to-long v4, v0

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v2

    const/16 v0, 0x650

    :goto_58
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_28c

    goto :goto_58

    :cond_5e
    :sswitch_5e
    const/16 v0, 0x68e

    goto :goto_58

    :sswitch_61
    if-nez v2, :cond_5e

    const/16 v0, 0x6ad

    goto :goto_58

    :sswitch_66
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->s(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    :goto_6f
    return-object v0

    :sswitch_70
    const-wide v2, 0x1aa5565ba8c19L

    sget v0, Lcom/github/catvod/spider/b;->a:I

    int-to-long v4, v0

    xor-long/2addr v2, v4

    invoke-static {v2, v3}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->ak(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonArray;

    move-result-object v0

    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->d(Ljava/lang/Object;)Ljava/util/Iterator;

    move-result-object v3

    :sswitch_8a
    invoke-static {v3}, Lcom/github/catvod/spider/merge/q/w;->f(Ljava/lang/Object;)Z

    move-result v1

    const/16 v0, 0x6cc

    :goto_90
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_29e

    goto :goto_90

    :sswitch_96
    if-eqz v1, :cond_9b

    const/16 v0, 0x729

    goto :goto_90

    :cond_9b
    :sswitch_9b
    const/16 v0, 0x70a

    goto :goto_90

    :sswitch_9e
    invoke-static {v3}, Lcom/github/catvod/spider/a;->bq(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/google/gson/JsonElement;

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->ax(Ljava/lang/Object;)Lcom/google/gson/JsonObject;

    move-result-object v1

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-wide v4, 0x1aa5a65ba8d7cL

    sget v6, Lcom/github/catvod/spider/c;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v1, v4}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v4

    invoke-static {v4}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v4

    invoke-static {v0, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v4, 0x1aa6165ba8c19L

    sget v6, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v0, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    const-wide v4, 0x1aa6365ba8c19L

    sget v6, Lcom/github/catvod/spider/b;->a:I

    int-to-long v6, v6

    xor-long/2addr v4, v6

    invoke-static {v4, v5}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v4

    invoke-static {v1, v4}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v4

    invoke-static {v4}, Lcom/github/catvod/spider/Sp360;->x(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v4

    invoke-static {v0, v4}, Lcom/github/catvod/spider/c;->ea(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/StringBuilder;

    invoke-static {v0}, Lcom/github/catvod/spider/a;->dx(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v4

    const-wide v6, -0x1aa6965ba8deeL

    sget v0, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7, v1}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v5

    const-wide v6, -0x1aa7265ba8ce1L

    sget v0, Lcom/github/catvod/spider/d;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Lcom/github/catvod/spider/c;->q(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v6

    const/16 v0, 0x748

    :goto_111
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_2b0

    goto :goto_111

    :sswitch_117
    if-nez v6, :cond_11d

    const v0, 0xbe60

    goto :goto_111

    :cond_11d
    :sswitch_11d
    const v0, 0xbe41

    goto :goto_111

    :sswitch_121
    const-wide v6, -0x1aa7565ba8deeL

    sget v0, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Lcom/github/catvod/spider/c;->q(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v6

    const v0, 0xbe7f

    :goto_135
    const v7, 0xbe90

    xor-int/2addr v0, v7

    sparse-switch v0, :sswitch_data_2c2

    goto :goto_135

    :cond_13d
    :sswitch_13d
    const v0, 0xbebd

    goto :goto_135

    :sswitch_141
    if-nez v6, :cond_13d

    const v0, 0xbedc

    goto :goto_135

    :sswitch_147
    const-wide v6, 0x1aa7865ba8ff5L

    sget v0, Lcom/github/catvod/spider/a;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Lcom/github/catvod/spider/c;->q(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v6

    const v0, 0xbefb

    :goto_15b
    const v7, 0xbf0c

    xor-int/2addr v0, v7

    sparse-switch v0, :sswitch_data_2d4

    goto :goto_15b

    :cond_163
    :sswitch_163
    const v0, 0xbf39

    goto :goto_15b

    :sswitch_167
    if-nez v6, :cond_163

    const v0, 0xc1e3

    goto :goto_15b

    :sswitch_16d
    const-wide v6, -0x1aa7c65ba8ce1L

    sget v0, Lcom/github/catvod/spider/d;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Lcom/github/catvod/spider/c;->q(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v6

    const v0, 0xc202

    :goto_181
    const v7, 0xc213

    xor-int/2addr v0, v7

    sparse-switch v0, :sswitch_data_2e6

    goto :goto_181

    :sswitch_189
    if-nez v6, :cond_18f

    const v0, 0xc25f

    goto :goto_181

    :cond_18f
    :sswitch_18f
    const v0, 0xc240

    goto :goto_181

    :sswitch_193
    const-wide v6, -0x1aa8165ba8ce1L

    sget v0, Lcom/github/catvod/spider/d;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0}, Lcom/github/catvod/spider/c;->q(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v6

    const v0, 0xc27e

    :goto_1a7
    const v7, 0xc28f

    xor-int/2addr v0, v7

    sparse-switch v0, :sswitch_data_2f8

    goto :goto_1a7

    :cond_1af
    :sswitch_1af
    const v0, 0xc2bc

    goto :goto_1a7

    :sswitch_1b3
    if-eqz v6, :cond_1af

    const v0, 0xc2db

    goto :goto_1a7

    :sswitch_1b9
    const v0, 0xc2fa

    :goto_1bc
    const v1, 0xc30b

    xor-int/2addr v0, v1

    sparse-switch v0, :sswitch_data_30a

    goto :goto_1bc

    :sswitch_1c4
    const v0, 0xc5a4

    goto :goto_1bc

    :sswitch_1c8
    const-wide v6, -0x1aa8665ba8ce1L

    sget v0, Lcom/github/catvod/spider/d;->a:I

    int-to-long v8, v0

    xor-long/2addr v6, v8

    invoke-static {v6, v7, v1}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v6

    const-wide v8, 0x1aa8c65ba8c19L

    sget v0, Lcom/github/catvod/spider/b;->a:I

    int-to-long v10, v0

    xor-long/2addr v8, v10

    invoke-static {v8, v9, v1}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v7

    const-wide v8, -0x1aa9265ba8deeL

    sget v0, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v10, v0

    xor-long/2addr v8, v10

    invoke-static {v8, v9}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->l(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v8

    const v0, 0xc601

    :goto_1f6
    const v9, 0xc612

    xor-int/2addr v0, v9

    sparse-switch v0, :sswitch_data_314

    goto :goto_1f6

    :sswitch_1fe
    if-eqz v8, :cond_204

    const v0, 0xc65e

    goto :goto_1f6

    :cond_204
    :sswitch_204
    const v0, 0xc63f

    goto :goto_1f6

    :sswitch_208
    const-wide v8, -0x1aa9765ba8deeL

    sget v0, Lcom/github/catvod/spider/merge/q/w;->a:I

    int-to-long v10, v0

    xor-long/2addr v8, v10

    invoke-static {v8, v9}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->c(Ljava/lang/Object;Ljava/lang/Object;)Lcom/google/gson/JsonElement;

    move-result-object v0

    invoke-static {v0}, Lcom/github/catvod/spider/Sp360;->ao(Ljava/lang/Object;)Z

    move-result v8

    const v0, 0xc67d

    :goto_220
    const v9, 0xc68e

    xor-int/2addr v0, v9

    sparse-switch v0, :sswitch_data_326

    goto :goto_220

    :cond_228
    :sswitch_228
    const v0, 0xc6bb

    goto :goto_220

    :sswitch_22c
    if-eqz v8, :cond_228

    const v0, 0xc965

    goto :goto_220

    :sswitch_232
    const v0, 0xc984

    :goto_235
    const v1, 0xc995

    xor-int/2addr v0, v1

    sparse-switch v0, :sswitch_data_338

    goto :goto_235

    :sswitch_23d
    const v0, 0xc9a3

    goto :goto_235

    :sswitch_241
    const-wide v8, -0x1aa9d65ba8ce1L

    sget v0, Lcom/github/catvod/spider/d;->a:I

    int-to-long v10, v0

    xor-long/2addr v8, v10

    invoke-static {v8, v9, v1}, Lcom/github/catvod/spider/Sp360;->ah(JLjava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    const v1, 0xca00

    :goto_251
    const v8, 0xca11

    xor-int/2addr v1, v8

    packed-switch v1, :pswitch_data_342

    :pswitch_258  #0xf, 0x10
    goto :goto_251

    :goto_259
    :pswitch_259  #0xe
    new-instance v1, Lcom/github/catvod/spider/merge/ck/d;

    invoke-direct {v1, v4, v5, v6, v7}, Lcom/github/catvod/spider/merge/ck/d;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-static {v1, v0}, Lcom/github/catvod/spider/Sp360;->av(Ljava/lang/Object;Ljava/lang/Object;)V

    invoke-static {v2, v1}, Lcom/github/catvod/spider/merge/q/w;->ab(Ljava/lang/Object;Ljava/lang/Object;)Z

    const v0, 0xca7c

    :goto_267
    const v1, 0xca8d

    xor-int/2addr v0, v1

    sparse-switch v0, :sswitch_data_34e

    goto :goto_267

    :sswitch_26f
    const v0, 0xcd26

    goto :goto_267

    :pswitch_273  #0x11
    const v1, 0xca1f

    goto :goto_251

    :sswitch_277
    const-wide v0, 0x1aa9c65ba8d7cL

    sget v8, Lcom/github/catvod/spider/c;->a:I

    int-to-long v8, v8

    xor-long/2addr v0, v8

    invoke-static {v0, v1}, Lcom/github/catvod/spider/Sp360;->ag(J)Ljava/lang/String;

    move-result-object v0

    goto :goto_259

    :sswitch_285
    invoke-static {v2}, Lcom/github/catvod/spider/Sp360;->s(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    goto/16 :goto_6f

    nop

    :sswitch_data_28c
    .sparse-switch
        0xe -> :sswitch_5e
        0x31 -> :sswitch_61
        0xcc -> :sswitch_66
        0xef -> :sswitch_70
    .end sparse-switch

    :sswitch_data_29e
    .sparse-switch
        0x11 -> :sswitch_96
        0x36 -> :sswitch_9b
        0x1d7 -> :sswitch_285
        0x1f4 -> :sswitch_9e
    .end sparse-switch

    :sswitch_data_2b0
    .sparse-switch
        0x11 -> :sswitch_117
        0xb918 -> :sswitch_8a
        0xb939 -> :sswitch_121
        0xb97b -> :sswitch_11d
    .end sparse-switch

    :sswitch_data_2c2
    .sparse-switch
        0xe -> :sswitch_13d
        0x2d -> :sswitch_8a
        0x4c -> :sswitch_147
        0xef -> :sswitch_141
    .end sparse-switch

    :sswitch_data_2d4
    .sparse-switch
        0x16 -> :sswitch_163
        0x35 -> :sswitch_8a
        0x1f7 -> :sswitch_167
        0x7eef -> :sswitch_16d
    .end sparse-switch

    :sswitch_data_2e6
    .sparse-switch
        0x11 -> :sswitch_189
        0x32 -> :sswitch_18f
        0x4c -> :sswitch_193
        0x53 -> :sswitch_8a
    .end sparse-switch

    :sswitch_data_2f8
    .sparse-switch
        0x12 -> :sswitch_1af
        0x33 -> :sswitch_1c8
        0x54 -> :sswitch_1b9
        0xf1 -> :sswitch_1b3
    .end sparse-switch

    :sswitch_data_30a
    .sparse-switch
        0x1f1 -> :sswitch_1c4
        0x6af -> :sswitch_8a
    .end sparse-switch

    :sswitch_data_314
    .sparse-switch
        0x13 -> :sswitch_1fe
        0x2d -> :sswitch_277
        0x32 -> :sswitch_204
        0x4c -> :sswitch_208
    .end sparse-switch

    :sswitch_data_326
    .sparse-switch
        0x12 -> :sswitch_228
        0x35 -> :sswitch_241
        0xf3 -> :sswitch_22c
        0xfeb -> :sswitch_232
    .end sparse-switch

    :sswitch_data_338
    .sparse-switch
        0x11 -> :sswitch_23d
        0x36 -> :sswitch_277
    .end sparse-switch

    :pswitch_data_342
    .packed-switch 0xe
        :pswitch_259  #0000000e
        :pswitch_258  #0000000f
        :pswitch_258  #00000010
        :pswitch_273  #00000011
    .end packed-switch

    :sswitch_data_34e
    .sparse-switch
        0xf1 -> :sswitch_26f
        0x7ab -> :sswitch_8a
    .end sparse-switch
.end method
