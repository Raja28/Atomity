

import { motion as Motion } from "framer-motion";
import CloudNode from "./CloudNode";
import NodeIcon from "./NodeIcon";
import ResourceChart from "./ResourceChart";
import ConnectionLines from "./ConnectionLines";
import { AwsLogo, AzureLogo, GoogleCloudLogo, OnPremiseLogo } from "./ProviderLogos";


const InfrastructureDiagram = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
      {/* Title */}
      <Motion.div
        className="text-center pt-8 pb-4 sm:pt-10 sm:pb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 mb-3.5">
          <span className="relative flex size-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-1.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-muted-foreground">
            Live monitoring
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(22px,5vw,42px)] font-medium tracking-[-0.03em] leading-[1.1] text-foreground">
          Cloud Infrastructure
        </h1>

        {/* Subtitle */}
        <p className="mt-2.5 mb-5 text-[clamp(12px,2vw,15px)] text-muted-foreground tracking-[0.01em]">
          Multi-cloud resource orchestration &amp; monitoring
        </p>

        {/* Stat pills */}
        <div className="inline-flex items-stretch divide-x divide-border border border-border/40 rounded-xl overflow-hidden text-xs">
          <div className="px-3.5 py-1.5 bg-muted/50">
            <span className="text-muted-foreground">Regions</span>
            <span className="ml-1.5 font-medium text-foreground">4</span>
          </div>
          <div className="px-3.5 py-1.5 bg-muted/50">
            <span className="text-muted-foreground">Services</span>
            <span className="ml-1.5 font-medium text-foreground">14</span>
          </div>
          <div className="px-3.5 py-1.5 bg-muted/50">
            <span className="text-muted-foreground">Health</span>
            <span className="ml-1.5 font-medium text-emerald-500">98.4%</span>
          </div>
        </div>
      </Motion.div>

      <div className="block sm:hidden">
        {/* Top row */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <CloudNode label={<AwsLogo />} glowColor="var(--node-aws)" delay={0.15}>
            <div className="grid grid-cols-2 gap-1">
              <NodeIcon variant="server" color="primary" label="EC2" delay={0.5} />
              <NodeIcon variant="database" color="accent" label="RDS" delay={0.6} />
              <NodeIcon variant="function" color="secondary" label="Lambda" delay={0.7} />
              <NodeIcon variant="storage" color="muted" label="S3" delay={0.8} />
            </div>
          </CloudNode>

          <CloudNode label={<AzureLogo />} glowColor="var(--node-azure)" delay={0.2}>
            <div className="grid grid-cols-2 gap-1">
              <NodeIcon variant="container" color="primary" label="AKS" delay={0.55} />
              <NodeIcon variant="database" color="secondary" label="SQL" delay={0.6} />
              <NodeIcon variant="function" color="accent" label="Func" delay={0.65} />
              <NodeIcon variant="network" color="muted" label="VNet" delay={0.7} />
            </div>
          </CloudNode>
        </div>

        {/* Center chart */}
        <Motion.div
          className="w-full max-w-[280px] mx-auto my-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ResourceChart delay={0.3} />
        </Motion.div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <CloudNode label={<GoogleCloudLogo />} glowColor="var(--node-gcp)" delay={0.25}>
            <div className="grid grid-cols-2 gap-1">
              <NodeIcon variant="container" color="accent" label="GKE" delay={0.6} />
              <NodeIcon variant="database" color="primary" label="SQL" delay={0.65} />
              <NodeIcon variant="function" color="muted" label="Run" delay={0.75} />
              <NodeIcon variant="network" color="primary" label="VPC" delay={0.8} />
            </div>
          </CloudNode>

          <CloudNode label={<OnPremiseLogo />} glowColor="var(--node-onprem)" delay={0.3}>
            <div className="grid grid-cols-2 gap-1">
              <NodeIcon variant="server" color="secondary" label="Rack 1" delay={0.7} />
              <NodeIcon variant="server" color="secondary" label="Rack 2" delay={0.75} />
              <NodeIcon variant="database" color="muted" label="DB" delay={0.8} />
              <NodeIcon variant="network" color="muted" label="LAN" delay={0.85} />
            </div>
          </CloudNode>
        </div>
      </div>

      {/*  Tablet / Desktop layout (≥ sm): absolute-positioned diagram */}
      <div
        className="relative hidden sm:block w-full"
        style={{ aspectRatio: "16/10", minHeight: "320px" }}
      >
        <ConnectionLines />

        {/* AWS — top left */}
        <div className="absolute top-[2%] left-[1%] md:top-[4%] md:left-[2%] lg:top-[4%] lg:left-[4%]"
          style={{ maxWidth: "clamp(130px, 30%, 220px)" }}>
          <CloudNode label={<AwsLogo />} glowColor="var(--node-aws)" delay={0.15}>
            <div className="grid grid-cols-2 gap-1 lg:gap-2">
              <NodeIcon variant="server" color="primary" label="EC2" delay={0.5} />
              <NodeIcon variant="database" color="accent" label="RDS" delay={0.6} />
              <NodeIcon variant="function" color="secondary" label="Lambda" delay={0.7} />
              <NodeIcon variant="storage" color="muted" label="S3" delay={0.8} />
            </div>
          </CloudNode>
        </div>

        {/* Azure — top right */}
        <div className="absolute top-[2%] right-[1%] md:top-[4%] md:right-[2%] lg:top-[4%] lg:right-[4%]"
          style={{ maxWidth: "clamp(130px, 30%, 220px)" }}>
          <CloudNode label={<AzureLogo />} glowColor="var(--node-azure)" delay={0.2}>
            <div className="grid grid-cols-2 gap-1 lg:gap-2">
              <NodeIcon variant="container" color="primary" label="AKS" delay={0.55} />
              <NodeIcon variant="database" color="secondary" label="SQL" delay={0.6} />
              <NodeIcon variant="function" color="accent" label="Func" delay={0.65} />
              <NodeIcon variant="network" color="muted" label="VNet" delay={0.7} />
            </div>
          </CloudNode>
        </div>

        {/* Center chart */}
        <Motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ width: "clamp(160px, 36%, 280px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ResourceChart delay={0.3} />
        </Motion.div>

        {/* Google Cloud — bottom left */}
        <div className="absolute bottom-[2%] left-[1%] md:bottom-[4%] md:left-[2%] lg:bottom-[4%] lg:left-[4%]"
          style={{ maxWidth: "clamp(130px, 30%, 220px)" }}>
          <CloudNode label={<GoogleCloudLogo />} glowColor="var(--node-gcp)" delay={0.25}>
            <div className="grid grid-cols-2 gap-1 lg:gap-2">
              <NodeIcon variant="container" color="accent" label="GKE" delay={0.6} />
              <NodeIcon variant="database" color="primary" label="SQL" delay={0.65} />
              <NodeIcon variant="storage" color="secondary" label="GCS" delay={0.7} />
              <NodeIcon variant="function" color="muted" label="Run" delay={0.75} />
  
            </div>
          </CloudNode>
        </div>

        {/* On-Premise — bottom right */}
        <div className="absolute bottom-[2%] right-[1%] md:bottom-[4%] md:right-[2%] lg:bottom-[4%] lg:right-[4%]"
          style={{ maxWidth: "clamp(130px, 30%, 220px)" }}>
          <CloudNode label={<OnPremiseLogo />} glowColor="var(--node-onprem)" delay={0.3}>
            <div className="grid grid-cols-2 gap-1 lg:gap-2">
              <NodeIcon variant="server" color="secondary" label="Rack 1" delay={0.7} />
              <NodeIcon variant="server" color="secondary" label="Rack 2" delay={0.75} />
              <NodeIcon variant="database" color="muted" label="DB" delay={0.8} />
              <NodeIcon variant="network" color="muted" label="LAN" delay={0.85} />
            </div>
          </CloudNode>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureDiagram;