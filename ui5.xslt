<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>

    <xsl:template match="h1">
        <ui5-title level="H1"><xsl:value-of select="."/></ui5-title>
    </xsl:template>

    <xsl:template match="table">
        <ui5-title level="H2"><xsl:value-of select="caption"/></ui5-title>
        <ui5-table>
            <xsl:apply-templates select="thead"/>
            <xsl:apply-templates select="tbody"/>
        </ui5-table>
    </xsl:template>

    <xsl:template match="thead">
        <xsl:for-each select="tr/th">
            <ui5-table-column>
                <xsl:value-of select="."/>
            </ui5-table-column>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="tbody">
        <xsl:for-each select="tr">
            <ui5-table-row>
                <xsl:for-each select="td">
                    <ui5-table-cell>
                        <xsl:value-of select="."/>
                    </ui5-table-cell>
                </xsl:for-each>
            </ui5-table-row>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>