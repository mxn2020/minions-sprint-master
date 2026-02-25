"""
Minions Sprint-master Python SDK

Agent to organize and sort daily granular task priority
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Sprint-master.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
